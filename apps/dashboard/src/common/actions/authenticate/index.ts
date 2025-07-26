'use server';

import { signIn } from '@auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log('authenticate', prevState, formData);
    return await signIn('credentials', formData);
  } catch (error) {
    if ((error as { type?: string })?.type) {
      switch ((error as { type: string }).type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
