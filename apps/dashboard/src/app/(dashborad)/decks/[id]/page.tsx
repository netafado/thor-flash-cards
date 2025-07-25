import { Card, Content, Section, Typography } from '@lib/ui';
import { getDeckById } from '@dash/common/actions/decks';
import { EditorView } from '@lib/ui';

import CardForm from '@dash/app/(dashborad)/_components/cardForm';

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
      <CardForm deckId={deckId} name={deck.title} />
      {(deck.cards ?? []).length > 0 && (
        <Section>
          {deck.cards?.map((card) => (
            <Section.Item key={card.id} type="full">
              <Card>
                <div className="p">
                  <Typography.H3>{card.front}</Typography.H3>
                  <EditorView markdown={card.back} />
                </div>
              </Card>
            </Section.Item>
          ))}
        </Section>
      )}
    </Content>
  );
}
