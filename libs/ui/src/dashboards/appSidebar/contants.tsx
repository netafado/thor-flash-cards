import { ListBulletIcon, MixIcon } from '@radix-ui/react-icons';
import { NavItem } from './types';

export const APP_SIDEBAR_CLASSES = {
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

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    icon: <ListBulletIcon />,
    name: 'Decks',
    subItems: [{ name: 'Start learning', path: '/decks/create' }],
  },
  {
    icon: <MixIcon />,
    name: 'Dashboard',
    subItems: [{ name: 'Ecommerce', path: '/decks/create' }],
  },
];
