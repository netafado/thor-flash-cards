import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const base_url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4004'; // Adjust the base URL as needed
const handler = NextAuth({
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
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        console.log('Authorizing user:', credentials?.email);
        const res = await fetch(`${base_url}/auth/signin`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const { AuthenticationResult } = await res.json();
        const userUrl = `${base_url}/auth/user`;
        console.log('User attributes:', userUrl, AuthenticationResult.IdToken);
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
              id: data.UserAttributes.find((attr) => attr.Name === 'sub')
                ?.Value,
              email: data.UserAttributes.find((attr) => attr.Name === 'email')
                ?.Value,
            };
            console.log('User attributes:', user);
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
});

export { handler as GET, handler as POST };
