import { Popover } from 'radix-ui';
import { FC, ReactNode } from 'react';

type PopoverProps = {
  children: ReactNode;
  trigger: ReactNode;
};

export const PopoverDemo: FC<PopoverProps> = ({ children, trigger }) => (
  <Popover.Root>
    <Popover.Trigger>{trigger}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content>
        {children}
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
