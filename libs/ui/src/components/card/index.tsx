import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-md border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
};
