'use client';
import { Deck } from '@dash/types';
import {
  Card,
  Typography,
  Button,
  PlayIcon,
  DotsVerticalIcon,
  DropdownMenu,
} from '@lib/ui';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const DeckCard: FC<Deck> = ({ id, title }) => {
  const route = useRouter();

  return (
    <div className="relative">
      <Card>
        <div className="relative w-full h-full flex flex-col justify-between">
          <div className="header flex items-center justify-between">
            <Typography.H4 className="text-brand">{title}</Typography.H4>
            <DropdownMenu
              trigger={
                <Button
                  size="sm"
                  className="rounded-full px-2 hover:text-dark-500 h-9 w-9 bg-gray-800 hover:bg-gray-800 border border-gray-800 text-gray-500"
                >
                  <DotsVerticalIcon width={15} height={15} />
                </Button>
              }
              actions={[
                {
                  label: 'Edit',
                  onClick: () => route.push(`/decks/${id}`),
                },
                {
                  label: 'Delete',
                  onClick: () => console.log('Delete clicked'),
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography.Paragraph className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              <span className="bg-success-500/30 p-1 text-success-500 rounded-md px-2">
                easy: 10%
              </span>{' '}
              <span className="bg-error-500/30 p-1 text-error-500 rounded-md px-2">
                Hard: 10%
              </span>{' '}
              total: 128 cards
            </Typography.Paragraph>
          </div>
          <div>
            <Button
              size="sm"
              onClick={() => route.push(`/decks/?deckId=${id}`)}
              className="rounded-full px-2 mt-2 hover:text-dark-500 h-9 w-9 bg-success-500/30 border border-success-500/60 text-success-500"
            >
              <PlayIcon width={20} height={20} className="text-success-500" />
            </Button>
          </div>
        </div>
      </Card>
      <div className="absolute w-full h-full border-gray-100 border bg-white p-5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900 left-4 top-4"></div>
      <div className="absolute w-full h-full border-gray-100 border bg-white p-5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900 left-2 top-2"></div>
    </div>
  );
};
export default DeckCard;
