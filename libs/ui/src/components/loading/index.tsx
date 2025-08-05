import { FC } from 'react';

import { LoadingProps } from './types';

const Loading: FC<LoadingProps> = ({ isLoading, children, skeleton }) => {
  if (isLoading) {
    return skeleton ? (
      skeleton
    ) : (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return children;
};
export { Loading };
