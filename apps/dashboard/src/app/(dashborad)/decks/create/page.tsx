'use client';

import {
  Content,
  Section,
  Card,
  Typography,
  Input,
  Button,
  Editor,
} from '@thor-commerce/ui';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const markdownMock = `

`;
export default function Index() {
  const t = useTranslations();
  const [markdown, setMarkdown] = useState(markdownMock);
  const handleMarkdownChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  };
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
              />
              <Editor markdown={markdown} onChange={handleMarkdownChange} />
              <Button className="mt-2">{t('pages.deck.create.title')}</Button>
            </Card>
          </form>
        </Section.Item>
      </Section>
    </Content>
  );
}
