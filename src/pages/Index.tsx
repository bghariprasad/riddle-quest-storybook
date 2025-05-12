
import { useState, useEffect } from 'react';
import { ThemeToggle } from "@/components/ThemeToggle";
import { MagicalBook } from "@/components/MagicalBook";
import { Stars } from "@/components/Stars";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration is complete before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Stars />
      
      <header className="py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-800 dark:text-purple-200 text-shadow-lg">
          Whimsical Riddles
        </h1>
        <ThemeToggle />
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <MagicalBook />
      </main>
      
      <footer className="py-6 text-center text-sm text-amber-700/70 dark:text-purple-300/70">
        <p>Created with magic and whimsy ✨</p>
      </footer>
    </div>
  );
};

export default Index;
