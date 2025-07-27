type SidebarVariants =
  | 'mobile:expanded'
  | 'desktop:expanded'
  | 'desktop:collapsed';

export type Action = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export type SidebarContextType = {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isMobile: boolean;
  isHovered: boolean;
  activeItem: string | null;
  openSubmenu: string | null;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setIsHovered: (isHovered: boolean) => void;
  setActiveItem: (item: string | null) => void;
  toggleSubmenu: (item: string) => void;
  userActions?: Action[];
  variant: SidebarVariants;
};
