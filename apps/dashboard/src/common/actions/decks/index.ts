'use server';

import { auth } from '@dash/common/helpers';
import { authFetch } from '@dash/common/helpers/http';
import type { Deck } from '@dash/types';
export async function createDeck(formData: FormData) {
  const title = formData.get('name');
  const content = formData.get('description');
  console.log('Creating deck with title:', title, 'and content:', content);
  if (typeof title !== 'string' || typeof content !== 'string') {
    throw new Error('Invalid form data');
  }
  const session = await auth();
  const deck = {
    title,
    content,
    background_color: 'black',
    repetions_days: 4,
  };
  const token = session?.user?.accessToken;

  const response = await fetch(process.env.API_URL + '/decks', {
    method: 'POST',
    body: JSON.stringify(deck),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  console.log('Response from API:', response);

  return response.json();
}

export async function getDecks() {
  'use server';

  const response = await authFetch<Deck[]>('/decks', {
    method: 'GET',
  });

  return response;
}
