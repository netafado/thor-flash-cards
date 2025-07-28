import SignIn from '@dash/components/signin';
import { Typography } from '@lib/ui';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import Image from 'next/image';

export default function PageLogin() {
  const t = useTranslations();
  return (
    <>
      <div className="flex h-lvh f flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="Your Company"
            src="/images/logo.svg"
            className="mx-auto h-10 w-auto"
            width={40}
            height={40}
          />
          <Typography.H2 className="mt-4 text-center text-md font-bold tracking-tight text-gray-900">
            {t('pages.login.title')}
          </Typography.H2>
        </div>
        <Suspense>
          <SignIn />
        </Suspense>
      </div>
    </>
  );
}
