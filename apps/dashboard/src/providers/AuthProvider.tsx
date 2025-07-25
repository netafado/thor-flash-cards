'use client';

import { DashboardLayout, SidebarProvider } from '@lib/ui';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import Auth from '@dash/common/hoc/auth';
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
        <Auth>
          <DashboardLayout>{children}</DashboardLayout>
        </Auth>
      </SidebarProvider>
    </SessionProvider>
  );
}
