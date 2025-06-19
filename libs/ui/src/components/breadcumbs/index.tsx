import Link from 'next/link';

import { BreadcrumbProps } from './types';
import { FC } from 'react';

const Breadcrumb: FC<BreadcrumbProps> = ({ title, pages }) => {
  if (!title) {
    return null;
  }
  return (
    <div className="overflow-hidden shadow-breadcrumb">
      <div>
        <div className="w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2 text-sm text-gray-500 dark:text-gray-400">
              {title}
            </h1>

            <ul className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="text-custom-sm hover:text-blue">
                <Link href="/">Home /</Link>
              </li>

              {pages?.map((page, key) => (
                <li
                  className="text-custom-sm last:text-blue capitalize text-sm text-gray-500 dark:text-gray-400"
                  key={key}
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
