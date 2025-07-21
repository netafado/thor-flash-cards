import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const base_url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4004'; // Adjust the base URL as needed

import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
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
      async authorize(credentials, req) {
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
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken || '';
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
