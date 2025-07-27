'use server';

import { signIn } from '@auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log('authenticate', prevState, formData);
    return await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      console.error('Authentication error:', error);
      return error.message;
    }
    throw error;
  }
}
