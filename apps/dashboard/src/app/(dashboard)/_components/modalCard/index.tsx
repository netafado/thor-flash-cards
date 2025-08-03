'use client';

import { Deck } from '@dash/types';
import { getDeckById } from '@dash/common/actions/decks';
import { Modal, Button, EditorView, Typography } from '@lib/ui';
import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const ModalCard: FC = () => {
  const [deck, setDeck] = useState<Deck>();
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);

  const searchParams = useSearchParams();
  const deckId = searchParams.get('deckId');
  const router = useRouter();

  const currentCard = deck?.cards?.[index];

  useEffect(() => {
    if (!open) {
      router.push('/decks');
    }
  }, [open, router]);

  useEffect(() => {
    const fetchDecks = async () => {
      if (!deckId) {
        return;
      }
      try {
        const deck = await getDeckById(deckId);

        setDeck(deck);
      } catch (error) {
        console.error('Error fetching decks:', error);
      }
    };
    setOpen(!!deckId);
    fetchDecks();
    console.log('deckId', deckId);
  }, [deckId, router]);

  const nextCard = () => {
    if (deck && deck.cards && index < deck.cards.length - 1) {
      setIndex(index + 1);
    } else {
      setOpen(false);
    }
  };

  const previousCard = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Modal open={open} title={`Card ${index + 1} of ${deck?.cards?.length}`}>
      <>
        <Typography.H3 className="font-sm">
          {' '}
          question: {currentCard?.front}
        </Typography.H3>
        <div className="relative max-h-dvh overflow-auto">
          {currentCard ? (
            <>
              <div className="absolute h-full w-full top-0 right-0 flex gap-2 dark:bg-gray-900/50 p-2 rounded-sm z-10">
                <div className="flex items-center gap-2 justify-center h-full w-full">
                  <div className="text-center">
                    <Typography.Paragraph className="font-sm">
                      How dificult is this question for you
                    </Typography.Paragraph>
                    <Button>Easy</Button>
                    <Button className="bg-error">More or less</Button>
                    <Button className="bg-error">Hard</Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <EditorView markdown={currentCard?.back || ''} />
              </div>
            </>
          ) : (
            <Typography.Paragraph className="text-center">
              No card available.
            </Typography.Paragraph>
          )}
        </div>

        <div className="fixed bottom-0 left-0 justify-between mt-4 z-20">
          <Button
            className="mt-4 ml-2"
            onClick={previousCard}
            disabled={index === 0}
          >
            Previous Card
          </Button>
          <Button className="mt-4" onClick={nextCard}>
            {index < (deck?.cards?.length || 0) - 1 ? 'Next Card' : 'Finish'}
          </Button>
        </div>
      </>
    </Modal>
  );
};
export default ModalCard;
