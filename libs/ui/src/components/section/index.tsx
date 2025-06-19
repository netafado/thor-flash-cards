import { FC } from 'react';
import { SectionProps, SectionItemProps } from './types';
import { Typography } from '../typepografy';
import { LAYOUT_CLASSES } from './constants';
import clsx from 'clsx';

const SectionComponent: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className="mb-8">
      {title && <Typography.H4 className="mb-4">{title}</Typography.H4>}
      <div className="grid grid-cols-12 gap-4 md:gap-6">{children}</div>
    </section>
  );
};

const Item: FC<SectionItemProps> = ({
  children,
  className,
  type = 'full',
  md = '1/3',
  lg = '1/3',
}) => {
  const layoutClass = LAYOUT_CLASSES[type];
  const layoutClassMd = `md:${LAYOUT_CLASSES[md]}`;
  const layoutClassLg = `lg:${LAYOUT_CLASSES[lg]}`;
  return (
    <div className={clsx(layoutClass, layoutClassMd, layoutClassLg, className)}>
      {children}
    </div>
  );
};

export const Section = Object.assign(SectionComponent, {
  Item,
});
