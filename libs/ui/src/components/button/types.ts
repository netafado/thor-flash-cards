import { ButtonHTMLAttributes } from 'react';

type ButtonColors = 'primary' | 'secondary' | 'danger' | 'brand';
type ButtonSizes = 'sm' | 'md' | 'lg';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  colors?: ButtonColors;
  className?: string;
  size?: ButtonSizes;
};
