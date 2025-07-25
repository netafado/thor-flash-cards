'use client';
import { Button, Card, Editor, Input, Section } from '@lib/ui';
import { createCard } from '@dash/common/actions/decks';
import { useState } from 'react';

type CardFormProps = {
  deckId: string;
  name: string;
};

const CardForm = ({ deckId, name }: CardFormProps) => {
  const [markdown, setMarkdown] = useState('');
  const handleMarkdownChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  };

  return (
    <Section>
      <Section.Item type="full" lg="full" md="full">
        <Card className="w-full">
          <form
            action={async (formData: FormData) => {
              console.log('Form Data:', Array.from(formData.keys()));
              await createCard(formData);
            }}
            className="p-4"
          >
            <Input
              placeholder="Deck ID"
              className="d-none"
              name="deck-id"
              defaultValue={deckId}
            />
            <Input
              placeholder="name"
              className="d-none"
              name="title"
              defaultValue={name}
            />

            <Input placeholder="question" className="mb-4 mt-2" name="front" />
            <Editor
              description="description"
              markdown={markdown}
              name="back"
              onChange={handleMarkdownChange}
            />
            <Button type="submit">create</Button>
          </form>
        </Card>
      </Section.Item>
    </Section>
  );
};

export default CardForm;
