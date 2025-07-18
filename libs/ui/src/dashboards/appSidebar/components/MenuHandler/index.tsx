import { CaretDownIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { NavItem } from '../../types';
import Link from 'next/link';
import { APP_SIDEBAR_CLASSES } from '../../contants';

type RenderMenuItemsProps = {
  navItems?: NavItem[];
  menuType: 'main' | 'others';
  handleSubmenuToggle: (index: number, type: 'main' | 'others') => void;
  openSubmenu: {
    type: 'main' | 'others';
    index: number;
  } | null;
  isExpanded: boolean;
  isHovered: boolean;
  isMobileOpen: boolean;
  isActive: (path: string) => boolean;
  subMenuRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  subMenuHeight: Record<string, number>;
};

const RenderMenuItems: FC<RenderMenuItemsProps> = ({
  navItems,
  menuType,
  handleSubmenuToggle,
  openSubmenu,
  isExpanded,
  isHovered,
  isMobileOpen,
  isActive,
  subMenuRefs,
  subMenuHeight,
}) => (
  <ul className="flex flex-col gap-4">
    {navItems?.map((nav, index) => (
      <li key={nav.name}>
        {nav.subItems ? (
          <button
            onClick={() => handleSubmenuToggle(index, menuType)}
            className={`${APP_SIDEBAR_CLASSES.menuItem} group  ${
              openSubmenu?.type === menuType && openSubmenu?.index === index
                ? APP_SIDEBAR_CLASSES.menuItemActive
                : APP_SIDEBAR_CLASSES.menuItemInactive
            } cursor-pointer ${
              !isExpanded && !isHovered
                ? 'lg:justify-center'
                : 'lg:justify-start'
            }`}
          >
            <span
              className={`${APP_SIDEBAR_CLASSES.menuItemIcon} ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? APP_SIDEBAR_CLASSES.menuItemIconActive
                  : APP_SIDEBAR_CLASSES.menuItemIconInactive
              }`}
            >
              {nav.icon}
            </span>
            {(isExpanded || isHovered || isMobileOpen) && (
              <span className={APP_SIDEBAR_CLASSES.menuItemText}>
                {nav.name}
              </span>
            )}
            {(isExpanded || isHovered || isMobileOpen) && (
              <CaretDownIcon
                className={`${APP_SIDEBAR_CLASSES.menuItemCaret} inline justify-self-end`}
              />
            )}
          </button>
        ) : (
          nav.path && (
            <Link
              href={nav.path}
              className={`${
                APP_SIDEBAR_CLASSES.menuDropdownItem
              } flex w-full gap-3 items-center  ${
                isActive(nav.path)
                  ? APP_SIDEBAR_CLASSES.menuItemActive
                  : APP_SIDEBAR_CLASSES.menuItemInactive
              }`}
            >
              <span
                className={`${APP_SIDEBAR_CLASSES.menuItemIcon} ${
                  isActive(nav.path)
                    ? APP_SIDEBAR_CLASSES.menuItemIconActive
                    : APP_SIDEBAR_CLASSES.menuItemIconInactive
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
                    className={`${APP_SIDEBAR_CLASSES.menuDropdownItem} ${
                      isActive(subItem.path)
                        ? APP_SIDEBAR_CLASSES.menuItemActive
                        : APP_SIDEBAR_CLASSES.menuItemInactive
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

export default RenderMenuItems;
