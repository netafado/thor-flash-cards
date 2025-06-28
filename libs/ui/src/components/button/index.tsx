import { FC } from 'react';
import clx from 'clsx';

const SIZES = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-9 px-4 text-base',
  lg: 'h-10 px-5 text-lg',
};

export const Button: FC<{
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ children, onClick, className, icon, size = 'md' }) => {
  return (
    <button
      onClick={onClick}
      className={clx(
        'inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200',
        SIZES[size],
        className
      )}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </button>
  );
};
