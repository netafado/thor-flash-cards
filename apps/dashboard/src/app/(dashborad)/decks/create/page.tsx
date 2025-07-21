'use client';

import { Content, Section, Card, Typography, Input, Button } from '@lib/ui';
import { useActionState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Suspense, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { createDeck } from '@dash/common/actions/decks';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('@lib/ui').then((mod) => mod.Editor || mod),
  {
    ssr: false,
  }
);

export default function Index() {
  const t = useTranslations();
  const [state, formAction, isPending] = useActionState(createDeck, false);
  const [markdown, setMarkdown] = useState('');
  const [name, setName] = useState('');
  const session = useSession();

  const handleMarkdownChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  };

  useEffect(() => {
    if (state) {
      setMarkdown('');
    }
  }, [state]);

  console.log('Session:', session);
  if (session.status !== 'authenticated') {
    return (
      <div>
        <h1>{t('pages.deck.create.title')}</h1>
        <p>{t('pages.deck.create.description')}</p>
        <Button onClick={() => signIn()}>Sign In to Create Deck</Button>
      </div>
    );
  }
  return (
    <Content title={t('pages.deck.create.title')} pages={['deck']}>
      <Section>
        <Section.Item type="full">
          <form action={formAction}>
            {isPending && (
              <div className="flex">
                <div className="shrink-0">
                  <span className="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
                </div>

                <div className="ms-4 mt-2 w-full">
                  <p
                    className="h-4 bg-gray-200 rounded-full dark:bg-neutral-700"
                    style={{ width: '40%' }}
                  ></p>

                  <ul className="mt-5 space-y-3">
                    <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                    <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                    <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                    <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                  </ul>
                </div>
              </div>
            )}
            <Card>
              <Typography.H1>{t('pages.deck.create.title')}</Typography.H1>
              <Typography.Paragraph>
                {t('pages.deck.create.description')}
              </Typography.Paragraph>
              <Input
                disabled={isPending}
                placeholder={t('pages.deck.create.deckName')}
                className="mb-4 mt-2"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Suspense fallback={<div>Loading editor...</div>}>
                <Editor
                  description="description"
                  markdown={markdown}
                  name="description"
                  onChange={handleMarkdownChange}
                />
              </Suspense>
              <Button disabled={isPending} className="mt-2">
                {t('pages.deck.create.title')}
              </Button>
            </Card>
          </form>
        </Section.Item>
      </Section>
    </Content>
  );
}
