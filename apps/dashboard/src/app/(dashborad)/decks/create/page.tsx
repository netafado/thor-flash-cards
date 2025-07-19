'use client';

import { Content, Section, Card, Typography, Input, Button } from '@lib/ui';
import { useTranslations } from 'next-intl';
import { Suspense, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';

import dynamic from 'next/dynamic';

// Update the import path below to the correct location of your Editor component
const Editor = dynamic(
  () => import('@lib/ui').then((mod) => mod.Editor || mod),
  {
    ssr: false,
  }
);

export default function Index() {
  const t = useTranslations();
  const [markdown, setMarkdown] = useState('');
  const [name, setName] = useState('');
  const session = useSession();

  const handleMarkdownChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  };

  // const createDeck = async () => {
  //   const deck = {
  //     name,
  //     markdown,
  //   };
  //   console.log('Deck created:', deck);

  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('markdown', markdown);

  //   const response = await fetch('/api/decks', {
  //     method: 'POST',
  //     body: formData,
  //   });
  //   console.log('Response:', response);
  // };

  if (!session) {
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
          <form>
            <Card>
              <Typography.H1>{t('pages.deck.create.title')}</Typography.H1>
              <Typography.Paragraph>
                {t('pages.deck.create.description')}
              </Typography.Paragraph>
              <Input
                placeholder={t('pages.deck.create.deckName')}
                className="mb-4 mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Suspense fallback={<div>Loading editor...</div>}>
                <Editor markdown={markdown} onChange={handleMarkdownChange} />
              </Suspense>
              <Button className="mt-2">{t('pages.deck.create.title')}</Button>
            </Card>
          </form>
        </Section.Item>
      </Section>
    </Content>
  );
}
