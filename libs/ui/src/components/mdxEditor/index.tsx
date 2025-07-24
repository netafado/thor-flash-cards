'use client';
import MDEditor from '@uiw/react-md-editor';

interface EditorProps {
  markdown: string;
  onChange: (value: string | undefined) => void;
  description?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
}

export const Editor = ({
  markdown,
  onChange,
  id = 'markdown-editor',
  name = 'markdown',
  disabled = false,
}: EditorProps) => {
  return (
    <div data-color-mode="dark" className="mt-2">
      <MDEditor
        aria-disabled={disabled}
        textareaProps={{
          id,
          name,
          disabled,
        }}
        value={markdown}
        {...{ onChange }}
      />
    </div>
  );
};

export const EditorView = ({ markdown }: { markdown: string }) => {
  return (
    <div data-color-mode="dark" className="mt-2">
      <MDEditor.Markdown
        className="text-gray-800 dark:text-gray-100 bg-white border-none"
        source={markdown}
        style={{ whiteSpace: 'pre-wrap' }}
      />
    </div>
  );
};
