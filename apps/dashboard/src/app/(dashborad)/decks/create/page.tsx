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
import { useState } from 'react';

const markdownMock = `
  * Item 1
  * Item 2
  * Item 3
    * nested item

  1. Item 1
  2. Item 2
`;
export default function Index() {
  const [markdown, setMarkdown] = useState(markdownMock);
  const handleMarkdownChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  };
  return (
    <Content title="create your deck" pages={['deck']}>
      <Section>
        <Section.Item type="full">
          <Card>
            <Typography.H1>Basic information</Typography.H1>
            <Typography.Paragraph>Please add your </Typography.Paragraph>
            <Input placeholder="name" className="mb-4 mt-2" />
            <Editor markdown={markdown} onChange={handleMarkdownChange} />
            <Button className="mt-2">Create Deck</Button>
          </Card>
        </Section.Item>
      </Section>
    </Content>
  );
}
