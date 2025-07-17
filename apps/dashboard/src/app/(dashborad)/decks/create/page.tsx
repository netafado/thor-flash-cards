'use client';

import {
  Content,
  Section,
  Card,
  Typography,
  Input,
  TextArea,
  Button,
  Editor,
} from '@thor-commerce/ui';

const markdown = `
  * Item 1
  * Item 2
  * Item 3
    * nested item

  1. Item 1
  2. Item 2
`;
export default function Index() {
  return (
    <Content title="create your deck" pages={['deck']}>
      <Section>
        <Section.Item type="full">
          <Card>
            <Typography.H1>Basic information</Typography.H1>
            <Typography.Paragraph>Please add your </Typography.Paragraph>
            <Input placeholder="name" className="mb-4 mt-2" />
            <TextArea placeholder="description" />
            <Editor markdown={markdown} />
            <Button className="mt-2">Create Deck</Button>
          </Card>
        </Section.Item>
      </Section>
    </Content>
  );
}
