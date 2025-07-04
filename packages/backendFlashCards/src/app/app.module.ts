import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecksModule } from '../modules/decks/decks.module';
import { TagsModule } from '../modules/tags/tags.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deck } from '../modules/decks/decks.entity';
import { User } from '../modules/users/infrastructure/user.entity';
import { Card } from '../modules/cards/cards.entity';
import { Tag } from '../modules/tags/tag.model';
import { CardModule } from '../modules/cards/cards.module';
import { CognitoAuthModule } from '@nestjs-cognito/auth';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '../modules/auth/auth.module';
@Module({
  imports: [
    CognitoAuthModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        jwtVerifier: {
          userPoolId: configService.get('COGNITO_USER_POOL_ID') as string,
          clientId: configService.get('COGNITO_CLIENT_ID'),
          // this is possible to use id or access token
          // if you want to use access token, change tokenUse to 'access'
          // using id token is recommended for security reasons and you have user information in it
          tokenUse: 'id',
        },
      }),
      inject: [ConfigService],
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
      host: process.env.DATABASE_URL,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: (msg: string) => console.log(msg),
      models: [Deck, User, Card, Tag],
    }),
    AuthModule,
    DecksModule,
    TagsModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
