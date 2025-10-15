import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Your Projects</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Organize your writing projects and collaborate with AI to create amazing content.
        </p>

        {/* Grid for the project cards */}
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProjectCard
            title="My First Novel"
            description="Draft of my upcoming sci-fi book."
            lastUpdated="2 hours ago"
            docCount={5}
          />
          <ProjectCard
            title="Team Meeting Notes"
            description="Action items from the Q4 sync."
            lastUpdated="Just now"
            docCount={1}
          />
          <ProjectCard
            title="Blog Post Ideas"
            description="No description"
            lastUpdated="Yesterday"
            docCount={12}
          />
        </div>
      </main>
    </div>
  );
}

export default App;