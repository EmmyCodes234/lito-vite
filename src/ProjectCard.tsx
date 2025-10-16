import { FileText, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
  docCount: number;
}

export function ProjectCard({ id, title, description, lastUpdated, docCount }: ProjectCardProps) {
  return (
    <Link to={`/editor/${id}`} className="group relative transform transition-transform duration-300 hover:-translate-y-1 block">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative p-6 border rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800 group-hover:border-blue-500/50 cursor-pointer h-full flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div>
          <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-6 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Clock size={12} />
            <span>{lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText size={12} />
            <span>{docCount} document{docCount !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}