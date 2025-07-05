import { FC } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const cardBaseClasses =
  'rounded-md border border-gray-100 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-sm shadow-gray-100 dark:shadow-gray-900';

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return <div className={clsx(cardBaseClasses, className)}>{children}</div>;
};
