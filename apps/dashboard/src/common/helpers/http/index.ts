'use server';
import { redirect } from 'next/navigation';

import { auth } from '..';

const API_URL = process.env.API_URL;

export async function fetcher(url: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  return res.json();
}

export async function authFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  'use server';
  const session = await auth();
  const API_URL = process.env.API_URL;
  const token = session?.user?.accessToken;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const urlRequest = `${API_URL}${url}`;

  const res = await fetch(urlRequest, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
  console.log('Response from API:', res.status);
  if (res.status === 401) {
    await redirect('/api/auth/signout?callbackUrl=/');
  }

  return res.json();
}
