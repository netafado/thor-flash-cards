'use client';
import MDEditor from '@uiw/react-md-editor';

interface EditorProps {
  markdown: string;
  onChange: (value: string | undefined) => void;
}

export const Editor = ({ markdown, onChange }: EditorProps) => {
  return <MDEditor value={markdown} {...{ onChange }} />;
};

export const EditorView = ({ markdown }: { markdown: string }) => {
  return (
    <MDEditor.Markdown
      source={markdown}
      style={{ whiteSpace: 'pre-wrap' }}
      className="prose dark:prose-invert"
    />
  );
};
