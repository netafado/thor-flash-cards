'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  AccessibilityIcon,
  CaretDownIcon,
  BarChartIcon,
  MixIcon,
} from '@radix-ui/react-icons';

import clsx from 'clsx';
import { AppSidebarProps, NavItem } from './types';

const appSidebarClasses = {
  base: 'fixed flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 lg:translate-x-0',
  expanded: 'w-[290px]',
  collapsed: 'w-[90px] mt-0',
  translateXFull: 'translate-x-0',
  translateXNone: '-translate-x-full',
  naveIcons: 'w-[20px] h-[20px]',
  menuItem:
    'hover:bg-brand-500/20 p-2 transition-all duration-300 ease-in-out rounded-md flex items-center gap-2 cursor-pointer relative flex w-full gap-3',
  menuItemCaret: 'text-gray-500 dark:text-gray-400',
  menuDropdownItem:
    'flex-1 block font-light text-gray-500 dark:text-gray-400 rounded-md text-left w-full hover:bg-brand-500/20 p-1 pl-2 transition-all',
  menuItemActive:
    'bg-brand-500/20 text-brand-500 dark:text-brand-400 dark:bg-brand-500/20',
  menuItemInactive: 'text-gray-500 dark:text-gray-400',
  menuItemIcon: 'font-semibold text-gray-500 dark:text-gray-400',
  menuItemIconActive: 'font-semibold text-brand-500 dark:text-brand-400',
  menuItemIconInactive: 'font-semibold text-gray-500 dark:text-gray-400',
  menuItemText: 'flex-1 text-left',
};
const navItems: NavItem[] = [
  {
    icon: <BarChartIcon className={appSidebarClasses.naveIcons} />,
    name: 'Checkout',
    subItems: [{ name: 'Payment gateways', path: '/payment-gateway' }],
  },
  {
    icon: <MixIcon className={appSidebarClasses.naveIcons} />,
    name: 'Dashboard',
    subItems: [{ name: 'Ecommerce', path: '/payment-gateway' }],
  },

  {
    icon: <AccessibilityIcon className={appSidebarClasses.naveIcons} />,
    name: 'User Profile',
    path: '/profile',
  },
  {
    name: 'Tables',
    icon: <AccessibilityIcon className={appSidebarClasses.naveIcons} />,
    subItems: [{ name: 'Basic Tables', path: '/basic-tables' }],
  },
];

export const AppSidebar: React.FC<AppSidebarProps> = ({
  isExpanded,
  isMobileOpen,
  isHovered,
  setIsHovered,
  variant,
}) => {
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: 'main' | 'others'
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`${appSidebarClasses.menuItem} group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? appSidebarClasses.menuItemActive
                  : appSidebarClasses.menuItemInactive
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? 'lg:justify-center'
                  : 'lg:justify-start'
              }`}
            >
              <span
                className={`${appSidebarClasses.menuItemIcon} ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? appSidebarClasses.menuItemIconActive
                    : appSidebarClasses.menuItemIconInactive
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={appSidebarClasses.menuItemText}>
                  {nav.name}
                </span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <CaretDownIcon
                  className={`${appSidebarClasses.menuItemCaret} inline justify-self-end`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`${
                  appSidebarClasses.menuDropdownItem
                } flex w-full gap-3 items-center  ${
                  isActive(nav.path)
                    ? appSidebarClasses.menuItemActive
                    : appSidebarClasses.menuItemInactive
                }`}
              >
                <span
                  className={`${appSidebarClasses.menuItemIcon} ${
                    isActive(nav.path)
                      ? appSidebarClasses.menuItemIconActive
                      : appSidebarClasses.menuItemIconInactive
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item__text">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : '0px',
              }}
            >
              <ul className="space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`${appSidebarClasses.menuDropdownItem} ${
                        isActive(subItem.path)
                          ? appSidebarClasses.menuItemActive
                          : appSidebarClasses.menuItemInactive
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: 'main' | 'others';
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: 'main' | 'others') => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const isCollapsed = variant === 'desktop:collapsed';

  return (
    <aside
      className={clsx(appSidebarClasses.base, {
        'w-[290px]': isExpanded || isHovered || isMobileOpen,
        'w-[90px] mt-0': !isExpanded && !isHovered && !isMobileOpen,
        'translate-x-0': isMobileOpen,
        '-translate-x-full': !isMobileOpen,
      })}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          isCollapsed ? 'md:justify-center' : 'justify-start'
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="images/user/logo/auth-logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="images/user/logo/auth-logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="images/user/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  isCollapsed ? 'md:justify-center' : 'justify-start'
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? 'Menu' : 'Menu'}
              </h2>
              {renderMenuItems(navItems, 'main')}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
