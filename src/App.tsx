import { useState, useEffect } from 'react';
import { Header } from './Header';
import { ProjectCard } from './ProjectCard';
import { ProjectCardSkeleton } from './ProjectCardSkeleton';
import { EmptyState } from './EmptyState';

const initialProjects = [
  { id: '1', title: "My First Novel", description: "Draft of my upcoming sci-fi book.", lastUpdated: "2 hours ago", docCount: 5 },
  { id: '2', title: "Team Meeting Notes", description: "Action items from the Q4 sync.", lastUpdated: "Just now", docCount: 1 },
  { id: '3', title: "Blog Post Ideas", description: "No description", lastUpdated: "Yesterday", docCount: 12 },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<typeof initialProjects>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects([]); 
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateNewProject = () => {
    if (projects.length === 0) {
      setProjects(initialProjects);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Your Projects</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Organize your writing projects and collaborate with AI to create amazing content.
          </p>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProjectCardSkeleton /><ProjectCardSkeleton /><ProjectCardSkeleton /><ProjectCardSkeleton />
          </div>
        ) : projects.length === 0 ? (
          <EmptyState onNewProject={handleCreateNewProject} />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                lastUpdated={project.lastUpdated}
                docCount={project.docCount}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;