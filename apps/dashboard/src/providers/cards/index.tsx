import { getDeckById } from '@dash/common/actions/decks';
import { Deck, Card } from '@dash/types';
import {
  createContext,
  FC,
  ReactNode,
  use,
  useEffect,
  useState,
  useTransition,
} from 'react';

type CardsContextType = Deck & {
  currentCard?: Card;
  nextCard?: () => void;
  previousCard?: () => void;
  setDeck?: (deck: Deck) => void;
  isPending?: boolean;
  indexCard: number;
  setDeckId?: (deckId: string | null) => void;
};

const CardsContext = createContext<CardsContextType | undefined>({
  id: '',
  title: '',
  description: '',
  background_color: '',
  repetions_days: 2,
  cards: [],
  isPending: false,
  indexCard: 0,
});

const CardsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isPending, startTransition] = useTransition();
  const [deckId, setDeckId] = useState<string | null>(null);
  const [deck, setDeck] = useState<Deck | undefined>();
  const [indexCard, setIndexCard] = useState(0);

  const currentCard = deck?.cards?.[indexCard];

  useEffect(() => {
    const fetchDecks = async () => {
      if (!deckId) {
        return;
      }
      try {
        startTransition(async () => {
          const deck = await getDeckById(deckId);
          setDeck?.(deck);
        });
      } catch (error) {
        console.error('Error fetching decks:', error);
      }
    };
    fetchDecks();
  }, [deckId, setDeck]);

  const nextCard = () => {
    if (deck && deck.cards && indexCard < deck.cards.length - 1) {
      setIndexCard(indexCard + 1);
    }
  };

  const previousCard = () => {
    if (indexCard > 0) {
      setIndexCard(indexCard - 1);
    }
  };

  const value: CardsContextType = {
    id: deck?.id ?? '',
    title: deck?.title ?? '',
    description: deck?.description ?? '',
    background_color: deck?.background_color ?? '',
    repetions_days: deck?.repetions_days ?? 2,
    cards: deck?.cards ?? [],
    nextCard,
    previousCard,
    currentCard,
    setDeck,
    isPending,
    indexCard,
    setDeckId,
  };

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};

const useCards = () => {
  const context = use(CardsContext);
  if (!context) {
    throw new Error('useCardsContext must be used within a CardsProvider');
  }
  return context;
};

export { CardsProvider, useCards };
