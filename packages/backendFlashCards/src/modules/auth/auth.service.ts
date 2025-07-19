// auth.service.ts
import { Injectable } from '@nestjs/common';
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  AdminInitiateAuthCommand,
  ConfirmSignUpCommand,
  AdminGetUserCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private client = new CognitoIdentityProviderClient({
    region: 'us-east-1',
  });

  constructor(private readonly configService: ConfigService) {
    this.client = new CognitoIdentityProviderClient({
      region: this.configService.get<string>('COGNITO_REGION') || 'us-east-1',
    });
  }

  async signUp(email: string, password: string) {
    console.log('Signing up user:', email);
    try {
      const command = new SignUpCommand({
        ClientId: this.configService.get('COGNITO_CLIENT_ID'),
        Username: email,
        Password: password,
        UserAttributes: [
          {
            Name: 'email',
            Value: email,
          },
        ],
      });

      const result = await this.client.send(command);
      return result;
    } catch (error) {
      console.error('Error during sign up:', error);
      return {
        error: 'Sign up failed. Please try again later.',
        statusCode: 401,
      };
    }
  }

  async signIn(email: string, password: string) {
    try {
      const command = new AdminInitiateAuthCommand({
        UserPoolId: this.configService.get('COGNITO_USER_POOL_ID'),
        ClientId: this.configService.get('COGNITO_CLIENT_ID'),
        AuthFlow: 'ADMIN_NO_SRP_AUTH',
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      });

      const result = await this.client.send(command);
      return result;
    } catch (error) {
      console.error('Error during sign in:', error);
      return {
        error: 'Sign in failed. Please check your credentials and try again.',
        statusCode: 401,
      };
    }
  }

  async confirmSignUp(email: string, confirmationCode: string) {
    const command = new ConfirmSignUpCommand({
      ClientId: this.configService.get('COGNITO_CLIENT_ID'),
      Username: email,
      ConfirmationCode: confirmationCode,
    });

    const result = await this.client.send(command);
    return result;
  }

  async getUser(email: string) {
    const command = new AdminGetUserCommand({
      UserPoolId: this.configService.get('COGNITO_USER_POOL_ID'),
      Username: email,
    });

    const result = await this.client.send(command);
    return result;
  }
}
