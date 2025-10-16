import { Search, Plus, Settings, Sun, Moon, User } from 'lucide-react';
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300">
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121212]">
      <div className="text-xl font-bold text-zinc-800 dark:text-zinc-200">Lito</div>

      <div className="hidden sm:flex items-center gap-2 p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 w-1/3 border border-transparent focus-within:border-blue-500 transition-colors duration-300">
        <Search size={18} className="text-zinc-500" />
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full bg-transparent outline-none text-sm text-zinc-800 dark:text-zinc-200"
        />
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md">
          <Plus size={16} />
          New Project
        </button>
        <ThemeToggle />
        <button className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300">
          <Settings size={20} />
        </button>
        <button className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}