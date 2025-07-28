import { FC } from 'react';
import { MouseEvent, ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

const cardBaseClasses =
  'rounded-md h-full border border-gray-100 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-sm shadow-gray-100 dark:shadow-gray-900';

const buttonProps = {
  type: 'button',
  role: 'button',
};

export const Card: FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      {...(onClick ? { ...buttonProps, onClick } : {})}
      className={clsx(cardBaseClasses, className)}
    >
      {children}
    </div>
  );
};
