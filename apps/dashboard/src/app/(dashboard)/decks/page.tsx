import { Content, Section, Card, Status } from '@lib/ui';
import { getDecks } from '@dash/common/actions/decks';

import DeckCard from '@dash/components/deck';
import ModalCard from '../_components/modalCard';

export default async function Index() {
  const decks = await getDecks();
  return (
    <Content title="we are here to help you in your journey" pages={['decks']}>
      <ModalCard />
      <Section>
        {Array.isArray(decks) ? (
          decks.map((deck) => (
            <Section.Item key={deck.id} type="1/3" lg="1/3" md="1/2">
              <DeckCard {...deck} />
            </Section.Item>
          ))
        ) : (
          <Card>
            <Status title="No decks available" />
          </Card>
        )}
      </Section>
    </Content>
  );
}
