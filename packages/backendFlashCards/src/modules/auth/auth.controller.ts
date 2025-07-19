import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Authentication, CognitoUser } from '@nestjs-cognito/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    };
  }
  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    return this.authService.signUp(body.email, body.password);
  }

  @Post('signin')
  async signin(@Body() body: { email: string; password: string }) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post('confirm-signup')
  async confirmSignup(
    @Body() body: { email: string; confirmationCode: string }
  ) {
    return this.authService.confirmSignUp(body.email, body.confirmationCode);
  }

  @Get('user')
  @Authentication()
  async getUser(@CognitoUser('email') email: string) {
    console.log('Fetching user:', email);
    return this.authService.getUser(email);
  }
}
