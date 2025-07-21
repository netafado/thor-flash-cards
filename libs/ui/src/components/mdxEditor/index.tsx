'use client';
import MDEditor from '@uiw/react-md-editor';

interface EditorProps {
  markdown: string;
  onChange: (value: string | undefined) => void;
  description?: string;
  id?: string;
  name?: string;
}

export const Editor = ({
  markdown,
  onChange,
  id = 'markdown-editor',
  name = 'markdown',
}: EditorProps) => {
  return (
    <div data-color-mode="dark" className="mt-2">
      <MDEditor
        textareaProps={{
          id,
          name,
        }}
        value={markdown}
        {...{ onChange }}
      />
    </div>
  );
};

export const EditorView = ({ markdown }: { markdown: string }) => {
  return (
    <MDEditor.Markdown
      className="text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 border-none"
      source={markdown}
      style={{ whiteSpace: 'pre-wrap' }}
    />
  );
};
