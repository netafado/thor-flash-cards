'use server';

import { signIn } from '@auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    return await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return error.message;
    }
    throw error;
  }
}
