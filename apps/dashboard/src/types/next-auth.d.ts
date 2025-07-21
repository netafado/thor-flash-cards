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
      refreshToken?: string; // Optional refresh token
      expiresIn?: number; // Optional expiration time for the access token
    };
  }

  interface User {
    id: string;
    email: string;
    accessToken?: string; // Optional access token
    refreshToken?: string; // Optional refresh token
  }

  interface JWT {
    id: string;
    email: string;
    accessToken?: string; // Optional access token
    expiresIn?: number;
    refreshToken?: string; // Optional refresh token
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    accessToken?: string; // Optional access token
    expiresIn?: number;
    refreshToken?: string; // Optional refresh token
  }
}
