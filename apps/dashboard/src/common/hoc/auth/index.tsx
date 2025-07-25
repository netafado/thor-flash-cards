'use client';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Auth = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === 'loading') return;
    if (!session || !session.user) {
      signIn();
    }
  }, [session, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default Auth;
