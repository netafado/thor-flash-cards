'use client';
import { Button, Editor, Input } from '@lib/ui';
import { createCard } from '@dash/common/actions/decks';
import { useActionState, useEffect, useState } from 'react';

type CardFormProps = {
  deckId: string;
  name: string;
};

const CardForm = ({ deckId, name }: CardFormProps) => {
  const [markdown, setMarkdown] = useState('');

  const [state, formAction, isPending] = useActionState(createCard, {
    id: '',
    deckId,
    name: name,
    front: '',
    back: '',
    dificulty: 1, // or provide a default value as required by your Card type
  });

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

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <form action={formAction} className="p-4">
      <Input
        placeholder="Deck ID"
        className="d-none hidden"
        name="deck-id"
        defaultValue={deckId}
      />
      <Input
        placeholder="name"
        className="d-none"
        name="title"
        defaultValue={name}
        disabled
      />

      <Input placeholder="question" className="mb-4 mt-2" name="front" />
      <Editor
        description="description"
        markdown={markdown}
        name="back"
        onChange={handleMarkdownChange}
      />
      <Button className="mt-4" type="submit">
        create
      </Button>
    </form>
  );
};

export default CardForm;
