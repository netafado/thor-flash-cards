'use client';
import { Deck } from '@dash/types';
import { Card, Typography } from '@lib/ui';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const DeckCard: FC<Deck> = ({ id, title }) => {
  const route = useRouter();
  return (
    <Card onClick={() => route.push(`/decks/${id}`)}>
      <Typography.H4>{title}</Typography.H4>
    </Card>
  );
};

export default DeckCard;
