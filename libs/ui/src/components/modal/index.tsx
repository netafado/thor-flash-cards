import { Dialog } from 'radix-ui';

import { Cross2Icon } from '@radix-ui/react-icons';
import { FC } from 'react';
import clsx from 'clsx';

import { BG_DEFAULT, BORDER_DEFAULT } from '../..';

type DialogDemoProps = {
  trigger?: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  description?: string;
  open?: boolean;
  toggleModal?: () => void;
  modalSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'fullScreen';
};

const MODAL_SIZES = {
  sm: 'max-h-[85vh] w-[90vw] max-w-[600px]',
  md: 'max-h-[85vh] w-[90vw] max-w-[800px]',
  lg: 'max-h-[85vh] w-[90vw] max-w-[1000px]',
  xl: 'max-h-[85vh] w-[90vw] max-w-[1200px]',
  full: 'max-h-[85vh] w-[90vw] max-w-[100vw]',
  fullScreen: 'max-h-[85vh] h-[90vh] w-[90vw] fixed inset-0 z-50',
};
const Modal: FC<DialogDemoProps> = ({
  trigger,
  title,
  description,
  children,
  open,
  toggleModal,
  modalSize = 'md',
}) => (
  <Dialog.Root {...{ open }}>
    {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
    <Dialog.Portal>
      <Dialog.Overlay
        className={clsx(
          BG_DEFAULT,
          'bg blur blur-sm fixed inset-0 data-[state=open]:animate-overlayShow z-50'
        )}
        onDoubleClick={toggleModal}
      />
      <Dialog.Content
        className={clsx(
          BG_DEFAULT,
          BORDER_DEFAULT,
          MODAL_SIZES[modalSize],
          'z-50 flex flex-col fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm border-gray-100 bg-white p-5 md:p-6 dark:shadow-gray-900 data-[state=open]:animate-contentShow overflow-hidden'
        )}
      >
        <Dialog.Title className="m-0 font-medium text-gray-500 dark:text-gray-500 mb-0 text-xs mb-2">
          {title}
        </Dialog.Title>
        {description && (
          <Dialog.Description className="mb-5 mt-2.5 text-sm text-gray-500 dark:text-gray-500">
            {description}
          </Dialog.Description>
        )}
        <div className="mb-4 text-gray-500 dark:text-gray-500">{children}</div>

        <Dialog.Close
          asChild
          onClick={toggleModal}
          className="text-white absolute right-2 top-2 inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 "
        >
          <Cross2Icon />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export { Modal };
