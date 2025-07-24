import { Card, Content, Section } from '@lib/ui';
import { getDeckById } from '@dash/common/actions/decks';
import { EditorView } from '@lib/ui';

export default async function Index({ params }: { params: { id: string } }) {
  const { id } = await params;
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
    </Content>
  );
}
