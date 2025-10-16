export function ProjectCardSkeleton() {
  return (
    <div className="p-6 border rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800 animate-pulse">
      <div className="h-5 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
      <div className="mt-3 h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
      <div className="mt-2 h-4 w-5/6 bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
      <div className="flex items-center justify-between mt-6">
        <div className="h-3 w-1/4 bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
        <div className="h-3 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
      </div>
    </div>
  );
}