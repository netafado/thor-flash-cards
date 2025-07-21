import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      email: string;
      /** The user's postal address. */
      address: string;
      accessToken?: string; // Optional access token
    };
  }

  interface User {
    id: string;
    email: string;
    accessToken?: string; // Optional access token
  }

  interface JWT {
    id: string;
    email: string;
    accessToken?: string; // Optional access token
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    accessToken?: string; // Optional access token
  }
}
