import { Bold, Italic, Underline } from 'lucide-react';

interface EditorToolbarProps {
  onCommand: (command: 'bold' | 'italic' | 'underline') => void;
}

export function EditorToolbar({ onCommand }: EditorToolbarProps) {
  return (
    <div className="flex items-center gap-1 p-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-t-lg">
      <button onClick={() => onCommand('bold')} className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700">
        <Bold size={16} />
      </button>
      <button onClick={() => onCommand('italic')} className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700">
        <Italic size={16} />
      </button>
      <button onClick={() => onCommand('underline')} className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700">
        <Underline size={16} />
      </button>
    </div>
  );
}