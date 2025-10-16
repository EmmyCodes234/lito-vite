import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EditorHeader() {
  return (
    <header className="flex items-center w-full p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121212]">
      <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
        <ArrowLeft size={20} />
        <span className="font-bold text-zinc-800 dark:text-zinc-200">Lito</span>
      </Link>
    </header>
  );
}