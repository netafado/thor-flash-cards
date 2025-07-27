'use client';
import { FC } from 'react';
import {
  AppSidebar,
  Backdrop,
  AppHeader,
  useSidebar,
  useTheme,
} from '../../index';

import { ReactNode } from 'react';

import { Action } from '../../providers/types';
interface DashboardLayoutProps {
  children: ReactNode;
  userActions?: Action[];
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  userActions = [],
}: DashboardLayoutProps) => {
  const {
    isExpanded,
    isHovered,
    isMobileOpen,
    isMobile,
    setIsHovered,
    toggleMobileSidebar,
    toggleSidebar,
    variant,
  } = useSidebar();

  const { toggleTheme } = useTheme();

  const classBaseVariant = {
    'mobile:expanded': 'ml-0',
    'desktop:expanded': 'ml-[290px]',
    'desktop:collapsed': 'ml-[90px]',
  };
  return (
    <div className="min-h-screen dark:bg-gradient-to-r dark:to-gray-900/95 dark:from-gray-950">
      <AppSidebar
        {...{
          isExpanded,
          isMobileOpen,
          isHovered,
          setIsHovered,
          isMobile,
          variant,
        }}
      />
      <Backdrop {...{ isMobileOpen, toggleMobileSidebar }} />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${classBaseVariant[variant]} `}
      >
        <AppHeader
          {...{
            isExpanded,
            isMobileOpen,
            toggleSidebar,
            toggleMobileSidebar,
            toggleTheme,
            userActions,
          }}
        />
        {children}
      </div>
    </div>
  );
};
