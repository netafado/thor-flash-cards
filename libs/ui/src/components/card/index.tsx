import { FC } from 'react';
import './styles.css';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return <div className={clsx('card', className)}>{children}</div>;
};
