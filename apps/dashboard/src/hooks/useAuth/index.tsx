'use client';
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export function useAuth() {
  const { data: session, update } = useSession();

  useEffect(() => {
    if (!session || !session.user) {
      signOut({ callbackUrl: '/auth/signin' });
    }

    update();
  }, [session, update]);
}
