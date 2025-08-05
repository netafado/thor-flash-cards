'use client';

import {
  Modal,
  Button,
  EditorView,
  Typography,
  Loading,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@lib/ui';
import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCards } from '@dash/providers/cards';

const CardLearning = () => {
  const { currentCard, nextCard, previousCard, indexCard } = useCards();
  if (!currentCard) {
    return (
      <div className="flex items-center justify-center h-full">
        <Typography.Paragraph className="font-sm">
          No card available for this deck.
        </Typography.Paragraph>
      </div>
    );
  }
  return (
    <>
      <div className="sticky top-0 z-20 flex justify-between items-center bg-white dark:bg-gray-900 p-2 rounded-sm">
        <Typography.H3 className="flex-1 font-sm bg-white dark:bg-gray-900 p-2 rounded-sm">
          {' '}
          question: {currentCard?.front}
        </Typography.H3>
        <div className=" bottom-0 left-0 justify-between">
          <Button
            className="ml-2 text-xs px-1 rounded rounded-full mr-1 round-full bg-gray-800 h-[25px]"
            onClick={previousCard}
            disabled={indexCard === 0}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            className="px-1 h-2 rounded rounded-full round-full bg-gray-800 h-[25px]"
            onClick={nextCard}
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative max-h-dvh">
        <>
          <div className="items-center gap-2 justify-center h-full w-full">
            <div className="text-center">
              <Typography.Paragraph className="font-sm">
                How dificult is this question for you
              </Typography.Paragraph>
              <Button>Easy</Button>
              <Button className="bg-error">More or less</Button>
              <Button className="bg-error">Hard</Button>
            </div>
          </div>
          <div className="absolute h-full w-full top-0 right-0 flex gap-2 dark:bg-gray-900/50 p-2 rounded-sm z-10 bg-white dark:bg-gray-900"></div>
          <div className="flex items-center justify-between">
            <EditorView markdown={currentCard?.back || ''} />
          </div>
        </>
      </div>
    </>
  );
};

const skeleton = (
  <div className="animate-pulse h-full w-full">
    <div className="h-3 w-[90px] rounded bg-gray-400 mt-2"></div>
    <div className="h-10 w-full rounded bg-gray-400 mt-2"></div>
    <div className="h-20 w-full rounded bg-gray-400 mt-2"></div>
  </div>
);

const ModalCard: FC = () => {
  const [open, setOpen] = useState(true);

  const searchParams = useSearchParams();
  const deckId = searchParams.get('deckId');

  const { cards, indexCard, isPending, setDeckId } = useCards();
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      router.push('/decks');
    }
  }, [open, router]);

  useEffect(() => {
    setDeckId?.(deckId);
    setOpen(!!deckId);
  }, [deckId, setDeckId]);

  const toggleModal = () => {
    if (!open) {
      router.push('/decks');
    }
    setOpen(!open);
  };

  return (
    <Modal
      {...{ toggleModal, open }}
      modalSize="fullScreen"
      title={
        isPending ? (
          <div className="animate-pulse h-1 w-[20px] rounded bg-gray-400 mb-2"></div>
        ) : (
          `Card ${indexCard + 1} of ${cards?.length}`
        )
      }
    >
      <Loading isLoading={!!isPending} skeleton={skeleton}>
        <CardLearning />
      </Loading>
    </Modal>
  );
};
export default ModalCard;
