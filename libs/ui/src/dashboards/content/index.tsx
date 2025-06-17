import { FC } from 'react';
import PageBreadcrumb from '../../components/breadcumbs';
import { BreadCrumbType } from './types';

export const Content: FC<BreadCrumbType> = ({ title, pages, children }) => {
  return (
    <main className="p-6">
      <PageBreadcrumb {...{ title, pages }} />
      {children}
    </main>
  );
};

export default Content;
