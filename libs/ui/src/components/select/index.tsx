import * as React from 'react';
import { Select } from 'radix-ui';
import clx from 'clsx';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

export const SelectUI = () => (
  <Select.Root>
    <Select.Trigger
      className="inline-flex items-center justify-center justify-between dark:bg-dark-900 shadow-theme-xs focus:border-brand-300  h-9 w-full rounded-lg border border-gray-300  py-2.5 pr-4 pl-3 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[200px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
      aria-label="Food"
    >
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="">
        <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="bg-white p-5 dark:border-gray-800 dark:bg-gray-900 md:p-6 shadow-sm shadow-gray-100 dark:shadow-gray-900">
          <Select.Group>
            <Select.Label className=" text-gray-600 p-2 dark:text-white text-xs">
              Fruits
            </Select.Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>

          <Select.Separator className="m-[5px] h-px bg-violet6" />
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

type SelectItemProps = React.ComponentPropsWithoutRef<typeof Select.Item> & {
  className?: string;
  children: React.ReactNode;
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={clx(
        'relative flex select-none items-center leading-none text-gray-600 p-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 dark:data-[highlighted]:bg-gray-700',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});
