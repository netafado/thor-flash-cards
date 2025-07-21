import { Content, Section, Card, Status } from '@lib/ui';
import { getDecks } from '@dash/common/actions/decks';

const decks = await getDecks();
export default function Index() {
  return (
    <Content title="we are here to help you in your journey" pages={['decks']}>
      <Section>
        <Section.Item type="1/3" lg="1/3" md="1/2">
          <Card>
            {Array.isArray(decks) ? (
              decks.map((deck) => <Status key={deck.id} title={deck.title} />)
            ) : (
              <Status title="No decks available" />
            )}
          </Card>
        </Section.Item>
      </Section>
    </Content>
  );
}
