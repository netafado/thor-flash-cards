'use client';

import { DashboardLayout, SidebarProvider } from '@lib/ui';
import { CardsProvider } from '@dash/providers/cards';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import Auth from '@dash/common/hoc/auth';

const DashContent = ({ children }: { children: React.ReactNode }) => {
  const userActions = [
    {
      label: 'New Tab',
      icon: <span className="icon-new-tab" />,
      onClick: () => console.log('New Tab clicked'),
    },
  ];

  return (
    <DashboardLayout userActions={userActions}>{children}</DashboardLayout>
  );
};

export default function DashboardProviders({
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
          <CardsProvider>
            <DashContent>{children}</DashContent>
          </CardsProvider>
        </Auth>
      </SidebarProvider>
    </SessionProvider>
  );
}
