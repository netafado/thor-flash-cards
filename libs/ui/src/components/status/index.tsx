import { FC } from 'react';
import { StatusProps, VariantType } from './types';
import { BackpackIcon } from '@radix-ui/react-icons';

import { VARIANT_CLASSES, VARIANT_ICONS } from './constant';

export const Status: FC<Omit<StatusProps, 'type'> & { type?: VariantType }> = ({
  title,
  description,
  leftContent,
  type = 'default',
  icon,
}) => {
  const Icon = VARIANT_ICONS[type];
  return (
    <div className="flex items-center">
      {icon ?? icon}
      {!icon && VARIANT_ICONS[type] && (
        <div className={`inline-flex flex-shrink-0 justify-center items-center w-11 h-11 rounded-full dark:shadow-gray-900 ${VARIANT_CLASSES[type]}`}>
          {icon ? icon : VARIANT_ICONS[type] ? <Icon /> : <BackpackIcon />}
        </div>
      )}

      <div className="flex-1 ml-3">
        <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white/90">
          {title}
        </span>
        <h3 className="font-ligth text-gray-500 dark:text-gray-400">
          {description}
        </h3>
      </div>
      {leftContent && leftContent}
    </div>
  );
};
