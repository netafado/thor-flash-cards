import { Card, Content, Section, Typography, Modal, Button } from '@lib/ui';
import { getDeckById } from '@dash/common/actions/decks';
import { EditorView } from '@lib/ui';

import CardForm from '@dash/app/(dashboard)/_components/cardForm';

export default async function Index({ params }: { params: { id: string } }) {
  const { id } = await params;
  const deckId = id as string;

  const deck = await getDeckById(id);

  return (
    <Content title={deck.title} pages={['deck']}>
      <Section>
        <Section.Item type="full">
          <Card>
            <div className="p">
              <EditorView markdown={deck.description} />
            </div>
          </Card>
        </Section.Item>
      </Section>
      <Modal
        trigger={<Button>{deck.cards?.length ?? 0} Cards</Button>}
        title={'create card'}
        description="Create a new card for this deck"
      >
        <CardForm deckId={deckId} name={deck.title} />
      </Modal>
      {(deck.cards ?? []).length > 0 && (
        <Section>
          {deck.cards?.map((card) => (
            <Section.Item key={card.id} type="full">
              <Card>
                <Typography.H3>{card.front}</Typography.H3>
                <EditorView markdown={card.back} />
              </Card>
            </Section.Item>
          ))}
        </Section>
      )}
    </Content>
  );
}
