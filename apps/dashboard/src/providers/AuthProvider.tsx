'use client';

import { DashboardLayout, SidebarProvider } from '@lib/ui';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <SidebarProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </SidebarProvider>
    </SessionProvider>
  );
}
