'use client';
import { Deck } from '@dash/types';
import { Card, Typography, Button, PlayIcon } from '@lib/ui';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const DeckCard: FC<Deck> = ({ id, title, cards }) => {
  const route = useRouter();
  return (
    <div className="relative">
      <Card onClick={() => route.push(`/decks?deckId=${id}`)}>
        <div className="relative w-full h-full flex justify-between">
          <div className="flex flex-col gap-2">
            <Typography.H4 className="text-brand">{title}</Typography.H4>
            <Typography.Paragraph className="text-gray-500 dark:text-gray-400 text-sm">
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
            <Button className="rounded-full hover:text-dark-500 h-9 w-9 px-2 bg-success-500/30 border border-success-500/60 text-success-500">
              <PlayIcon
                width={20}
                height={20}
                className="h-9 w-9 text-success-500 "
              />
            </Button>
          </div>
        </div>
      </Card>
      <div className="absolute w-full h-full border-gray-100 border bg-white p-5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900 left-4 top-4"></div>
      <div className="absolute w-full h-full border-gray-100 border bg-white p-5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900 left-2 top-2"></div>
    </div>
  );
};
//  relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200
export default DeckCard;
