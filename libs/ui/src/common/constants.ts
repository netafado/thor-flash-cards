export type VariantType = 'info' | 'success' | 'warning' | 'error' | 'default';

export const VARIANT_CLASSES_BASE: Record<VariantType, string> = {
  default: 'bg-error-500/30',
  warning: 'bg-warning-500/30',
  success: 'bg-success-500/30',
  error: 'bg-error-500/30',
  info: 'bg-info-500/30',
};

export const PARAGRAPH_CLASSES_BASE =
  'text-base font-light text-gray-500 dark:text-gray-400';

export const TITLE_CLASSES_BASE =
  'font-bold leading-none text-gray-900 dark:text-white/90';

export const BG_DEFAULT = 'bg-white dark:bg-gray-900';

export const BG_DEFAULT_DARK =
  'bg-white dark:bg-gray-900 text-gray-900 dark:text-white';
