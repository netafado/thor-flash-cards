import { VariantType } from './types';
import {
  BackpackIcon,
  QuestionMarkCircledIcon,
  CheckIcon,
  Cross2Icon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';

export const VARIANT_CLASSES: Record<VariantType, string> = {
  default: 'bg-red-500/30 border border-red-500/60 text-red-900',
  warning: 'bg-yellow-500/30 border border-yellow-500 text-yellow-500',
  success: 'bg-green-500/30 border border-green-500/60 text-green-500',
  error: 'bg-red-500/30 border border-red-500/60 text-red-500',
  info: 'bg-blue-500/30 border border-blue-500/60 text-blue-500',
};

export const VARIANT_ICONS: Record<VariantType, React.ComponentType> = {
  default: BackpackIcon,
  warning: QuestionMarkCircledIcon,
  success: CheckIcon,
  error: Cross2Icon,
  info: InfoCircledIcon,
};
