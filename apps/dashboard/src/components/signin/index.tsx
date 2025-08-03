'use client';
import { Button, Input } from '@lib/ui';
import { useTranslations } from 'next-intl';
import { authenticate } from '@dash/common/actions/authenticate';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';

const SignInForm = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  return (
    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action={formAction} method="POST" className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            {t('pages.login.email')}
          </label>
          <div className="mt-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('pages.login.emailPlaceholder')}
              className="block w-full"
            />
          </div>
        </div>

        <div>
          <div className="mt-2">
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t('pages.login.passwordPlaceholder')}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        {errorMessage && (
          <div className="text-red-600 text-sm/6 bg-red-50 p-2 rounded-md">
            {t('pages.login.error', { error: errorMessage })}
          </div>
        )}
        <div>
          <input type="hidden" name="redirectTo" value={callbackUrl} />

          <Button
            disabled={isPending}
            className="flex w-full justify-center py-1.5 text-sm/6 "
          >
            {t('pages.login.signIn')}
          </Button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        {' '}
        <a
          href="#"
          className="font-semibold text-brand-600 hover:text-brand-500"
        >
          {t('pages.login.trial')}
        </a>
      </p>
    </div>
  );
};

export default SignInForm;
