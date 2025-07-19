'use client';
import { useEffect, useRef, useState, useCallback, FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import RenderMenuItems from './components/MenuHandler';
import clsx from 'clsx';
import { AppSidebarProps } from './types';
import { APP_SIDEBAR_CLASSES, MAIN_NAV_ITEMS } from './contants';

export const AppSidebar: FC<AppSidebarProps> = ({
  isExpanded,
  isMobileOpen,
  isHovered,
  setIsHovered,
  variant,
}) => {
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: 'main' | 'others';
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
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
      className={clsx(APP_SIDEBAR_CLASSES.base, {
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
          <Image
            src="/images/logo/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
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
              <RenderMenuItems
                navItems={MAIN_NAV_ITEMS}
                menuType="main"
                handleSubmenuToggle={handleSubmenuToggle}
                openSubmenu={openSubmenu}
                isExpanded={isExpanded}
                isHovered={isHovered}
                isMobileOpen={isMobileOpen}
                isActive={isActive}
                subMenuRefs={subMenuRefs}
                subMenuHeight={subMenuHeight}
              />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
