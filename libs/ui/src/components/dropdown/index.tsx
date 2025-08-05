import * as React from 'react';
import { DropdownMenu } from 'radix-ui';
import { BG_DEFAULT_DARK, BG_DROP_DOWN_ITEM, BORDER_DEFAULT } from '../..';
import clsx from 'clsx';

type Action = {
  label: string;
  onClick: () => void;
};

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu.Root> & {
  trigger?: React.ReactNode;
  actions: Action[];
};

const DropdownMenuDemo: React.FC<DropdownMenuProps> = ({
  trigger,
  actions,
}) => {
  return (
    <DropdownMenu.Root>
      {trigger && (
        <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      )}

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(
            BG_DEFAULT_DARK,
            BORDER_DEFAULT,
            'min-w-[220px] rounded-sm p-[5px] data-[side=top]:animate-slideDownAndFade z-10 data-[side=right]:animate-slideLeftAndFade',
            'will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade ',
            'shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'
          )}
          sideOffset={5}
        >
          {actions.map((action, index) => (
            <DropdownMenu.Item
              key={index}
              className={clsx(
                BG_DROP_DOWN_ITEM,
                'cursor-pointer select-none rounded-sm px-3 py-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900',
                'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
              )}
              onClick={action.onClick}
            >
              {action.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export { DropdownMenuDemo as DropdownMenu };
