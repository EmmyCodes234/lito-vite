import { Search, Plus, Settings, Sun } from 'lucide-react';

// A simple placeholder for the theme toggle button
// You can replace this with your actual ThemeToggle later
function ThemeTogglePlaceholder() {
  return (
    <button className="p-2 rounded-full hover:bg-white/10">
      <Sun size={20} />
    </button>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-4 border-b border-zinc-200 dark:border-zinc-800">
      {/* Left Side: Logo */}
      <div className="text-xl font-bold">Lito</div>

      {/* Middle: Search Bar */}
      <div className="flex items-center gap-2 p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 w-1/3">
        <Search size={18} className="text-zinc-500" />
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <Plus size={18} />
          New Project
        </button>
        <ThemeTogglePlaceholder />
        <button className="p-2 rounded-full hover:bg-white/10">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}