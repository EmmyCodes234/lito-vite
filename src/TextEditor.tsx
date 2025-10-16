import { EditorToolbar } from './EditorToolbar';

type Command = 'bold' | 'italic' | 'underline';

export function TextEditor() {
  const handleFormat = (command: Command) => {
    if (typeof window !== 'undefined') {
      document.execCommand(command, false);
    }
  };

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <EditorToolbar onCommand={handleFormat} />
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="w-full min-h-[500px] p-4 focus:outline-none text-base text-zinc-800 dark:text-zinc-200 leading-relaxed"
        aria-label="Text Editor"
      >
      </div>
    </div>
  );
}