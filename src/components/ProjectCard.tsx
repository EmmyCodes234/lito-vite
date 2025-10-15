import { FileText } from 'lucide-react';

// Define the "props" or inputs for our component
interface ProjectCardProps {
  title: string;
  description: string;
  lastUpdated: string;
  docCount: number;
}

export function ProjectCard({ title, description, lastUpdated, docCount }: ProjectCardProps) {
  return (
    <div className="p-6 border rounded-lg bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-blue-500 cursor-pointer">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      <div className="flex items-center justify-between mt-6 text-xs text-zinc-500 dark:text-zinc-400">
        <span>{lastUpdated}</span>
        <div className="flex items-center gap-1">
          <FileText size={12} />
          <span>{docCount} document{docCount !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  );
}