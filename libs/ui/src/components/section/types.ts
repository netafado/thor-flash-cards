export type SectionProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export type SectionItemProps = {
  children: React.ReactNode;
  className?: string;
  type?: LayoutType;
  md?: LayoutType;
  lg?: LayoutType;
};

export type LayoutType = '1/4' | '1/6' | '1/3' | '1/2' | 'full';
