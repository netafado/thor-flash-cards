'use server';

import { authFetch } from '@dash/common/helpers/http';
import type { Deck, Card } from '@dash/types';

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

export async function createCard(_prevState: Card | null, queryData: FormData) {
  'use server';
  const front = queryData.get('front');
  const back = queryData.get('back');
  const deckId = queryData.get('deck-id');
  const name = queryData.get('title');

  if (typeof front !== 'string' || typeof back !== 'string') {
    throw new Error('Invalid form data');
  }

  const card = {
    name,
    front,
    back,
    deckId,
    dificulty: 'HARD',
  };
  console.log('Creating card with data:', card);
  const response = await authFetch<Card>(`/cards`, {
    method: 'POST',
    body: JSON.stringify(card),
  });

  return response;
}

export async function getDecks() {
  'use server';
  const response = await authFetch<Deck[]>('/decks', {
    cache: 'default',
    method: 'GET',
  });

  return response;
}

export async function getDeckById(deckId: string) {
  'use server';

  const response = await authFetch<Deck>(`/decks/${deckId}`, {
    method: 'GET',
    cache: 'default',
  });

  return response;
}
