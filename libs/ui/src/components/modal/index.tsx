import { Dialog } from 'radix-ui';

import { Cross2Icon } from '@radix-ui/react-icons';
import { FC } from 'react';

type DialogDemoProps = {
  trigger?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  description?: string;
  open?: boolean;
};

const Modal: FC<DialogDemoProps> = ({
  trigger,
  title,
  description,
  children,
  open,
}) => (
  <Dialog.Root {...{ open }}>
    {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-gray-900 data-[state=open]:animate-overlayShow z-50" />
      <Dialog.Content className="z-50 fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-sm border-gray-100 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 dark:shadow-gray-900 data-[state=open]:animate-contentShow">
        <Dialog.Title className="m-0 font-medium text-gray-500 dark:text-gray-500 mb-0 text-xs mb-2">
          {title}
        </Dialog.Title>
        {description && (
          <Dialog.Description className="mb-5 mt-2.5 text-sm text-gray-500 dark:text-gray-500">
            {description}
          </Dialog.Description>
        )}
        {children}
        <Dialog.Close
          asChild
          className="text-white absolute right-2 top-2 inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <Cross2Icon />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export { Modal };
