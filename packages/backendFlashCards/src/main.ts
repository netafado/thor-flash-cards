import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@codegenie/serverless-express';
import { Handler } from 'aws-lambda';
import express from 'express';
import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';
import { AppModule } from './app/app.module';

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    console.log('Bootstrapping NestJS application...');
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
      {
        logger: ['error', 'warn', 'log'],
      }
    );

    nestApp.enableCors();

    await nestApp.init();

    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer;
}

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback
) => {
  const server = await bootstrap();

  return server(event, context, callback);
};

export default handler;
