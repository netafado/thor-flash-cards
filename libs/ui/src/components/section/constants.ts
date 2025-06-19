import { LayoutType } from './types';

export const LAYOUT_CLASSES: Record<LayoutType, string> = {
  '1/4': 'col-span-3',
  '1/6': 'col-span-2',
  '1/3': 'col-span-4',
  '1/2': 'col-span-6',
  full: 'col-span-12',
};
