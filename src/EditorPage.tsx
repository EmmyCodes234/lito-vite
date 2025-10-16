import { useParams } from 'react-router-dom';
import { EditorHeader } from './EditorHeader';
import { TextEditor } from './TextEditor';

export function EditorPage() {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212]">
      <EditorHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TextEditor />
      </main>
    </div>
  );
}