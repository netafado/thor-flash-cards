import { FC } from 'react';
import clx from 'clsx';
import { ButtonProps } from './types';

const SIZES = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-9 px-4 text-base',
  lg: 'h-10 px-5 text-lg',
};

const BTN_COLORS = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  brand: 'bg-brand-600 text-white hover:bg-green-700',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  icon,
  size = 'md',
  colors = 'primary',
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={clx(BASE_CLASSES, SIZES[size], BTN_COLORS[colors], className)}
      {...rest}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </button>
  );
};
