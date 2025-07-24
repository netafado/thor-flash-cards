'use server';

import { authFetch } from '@dash/common/helpers/http';
import type { Deck } from '@dash/types';

export async function createDeck(_prevState: Deck | null, queryData: FormData) {
  'use server';
  const title = queryData.get('name');
  const description = queryData.get('description');

  if (typeof title !== 'string' || typeof description !== 'string') {
    throw new Error('Invalid form data');
  }

  const deck: Partial<Deck> = {
    title,
    description,
    background_color: 'black',
    repetions_days: 4,
  };

  const response = await authFetch<Deck>('/decks', {
    method: 'POST',
    body: JSON.stringify(deck),
  });

  return response;
}

export async function getDecks() {
  'use server';
  const response = await authFetch<Deck[]>('/decks', {
    cache: 'no-store',
    method: 'GET',
  });

  return response;
}

export async function getDeckById(deckId: string) {
  'use server';

  const response = await authFetch<Deck>(`/decks/${deckId}`, {
    method: 'GET',
  });

  return response;
}
