import NextAuth, { NextAuthConfig, NextAuthResult } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const base_url = process.env.API_URL || 'http://localhost:4004';

const customAWSCognito = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    email: {
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email',
    },
    password: {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
    },
  },
  async authorize(credentials: Record<string, any>) {
    const res = await fetch(`${base_url}/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' },
    });
    const { AuthenticationResult } = await res.json();
    const userUrl = `${base_url}/auth/user`;

    if (AuthenticationResult) {
      try {
        const result = await fetch(`${userUrl}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${AuthenticationResult.IdToken}`,
          },
          redirect: 'follow',
        });

        const data = await result.json();
        const user = {
          id: data.UserAttributes.find(
            (attr: { Name: string }) => attr.Name === 'sub'
          )?.Value,
          email: data.UserAttributes.find(
            (attr: { Name: string }) => attr.Name === 'email'
          )?.Value,
          accessToken: AuthenticationResult.IdToken,
          refreshToken: AuthenticationResult.RefreshToken,
          expiresIn: AuthenticationResult.ExpiresIn,
        };

        return user;
      } catch (error) {
        console.error('Error fetching user attributes:', error);
        return null;
      }
    }
    // Return null if user data could not be retrieved
    return null;
  },
});

const providers = [customAWSCognito];

export const authOptions: NextAuthConfig = {
  debug: process.env.NODE_ENV !== 'production' ? true : false,
  providers,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken || '';
        token.refreshToken = user.refreshToken || '';
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.expiresIn = token.expiresIn;

      return session;
    },
  },
  session: {
    strategy: 'jwt' as const,
    maxAge: 60 * 60,
  },
};

const nextAuthResult = NextAuth(authOptions);

export const handlers = nextAuthResult.handlers;
export const signIn = nextAuthResult.signIn;
export const signOut = nextAuthResult.signOut;
export const auth: NextAuthResult['auth'] = nextAuthResult.auth;
