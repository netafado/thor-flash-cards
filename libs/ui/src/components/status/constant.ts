import { VariantType } from './types';
import {
  BackpackIcon,
  QuestionMarkCircledIcon,
  CheckIcon,
  Cross2Icon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';

export const VARIANT_CLASSES: Record<VariantType, string> = {
  default: 'bg-error-500/30 border border-error-500/60 text-error-900',
  warning: 'bg-warning-500/30 border border-warning-500 text-warning-500',
  success: 'bg-success-500/30 border border-success-500/60 text-success-500',
  error: 'bg-error-500/30 border border-error-500/60 text-error-500',
  info: 'bg-blue-500/30 border border-blue-500/60 text-blue-500',
};

export const VARIANT_ICONS: Record<VariantType, React.ComponentType> = {
  default: BackpackIcon,
  warning: QuestionMarkCircledIcon,
  success: CheckIcon,
  error: Cross2Icon,
  info: InfoCircledIcon,
};
