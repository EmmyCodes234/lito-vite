import { Plus } from 'lucide-react';

interface EmptyStateProps {
  onNewProject: () => void;
}

export function EmptyState({ onNewProject }: EmptyStateProps) {
  return (
    <div className="text-center py-16 px-6 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">No projects yet</h2>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        It looks a little empty in here. Let's create your first project.
      </p>
      <button 
        onClick={onNewProject}
        className="mt-6 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md mx-auto"
      >
        <Plus size={16} />
        Create First Project
      </button>
    </div>
  );
}