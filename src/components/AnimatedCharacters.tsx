
import React from 'react';
import { Owl, Raccoon, Goblin, Sparkles } from 'lucide-react';

interface AnimatedCharactersProps {
  isCorrect: boolean | null;
}

export function AnimatedCharacters({ isCorrect }: AnimatedCharactersProps) {
  return (
    <div className="flex justify-center items-end gap-4 md:gap-8 h-32 my-6">
      <div className="relative group">
        <div className={`
          p-3 bg-whimsy-purple/70 rounded-full shadow-lg 
          transition-all duration-300 ease-in-out
          ${isCorrect === true ? 'scale-110' : 'scale-100'}
          ${isCorrect === false ? 'opacity-50 scale-90' : 'opacity-100'}
          hover:bg-whimsy-purple/90 dark:bg-indigo-900/70
        `}>
          <Owl 
            className={`
              h-12 w-12 md:h-16 md:w-16 text-indigo-800 dark:text-indigo-200
              ${isCorrect === true ? 'animate-blinking' : ''}
              transition-all duration-300
            `}
          />
        </div>
        {isCorrect === true && (
          <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 animate-star-twinkle" />
        )}
        <div className="absolute -bottom-2 left-0 right-0 text-center text-xs font-semibold opacity-80">Wise Owl</div>
      </div>

      <div className="relative group">
        <div className={`
          p-3 bg-whimsy-orange/70 rounded-full shadow-lg 
          transition-all duration-300 ease-in-out
          ${isCorrect === true ? 'scale-110' : 'scale-100'}
          ${isCorrect === false ? 'opacity-50 scale-90' : 'opacity-100'}
          hover:bg-whimsy-orange/90 dark:bg-orange-900/70
          animate-sway
        `}>
          <Raccoon 
            className={`
              h-12 w-12 md:h-16 md:w-16 text-amber-800 dark:text-amber-200
              ${isCorrect === true ? 'animate-wiggle' : ''}
              transition-all duration-300
            `}
          />
        </div>
        {isCorrect === true && (
          <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 animate-star-twinkle" />
        )}
        <div className="absolute -bottom-2 left-0 right-0 text-center text-xs font-semibold opacity-80">Curious Raccoon</div>
      </div>

      <div className="relative group">
        <div className={`
          p-3 bg-whimsy-green/70 rounded-full shadow-lg 
          transition-all duration-300 ease-in-out
          ${isCorrect === true ? 'scale-110' : 'scale-100'}
          ${isCorrect === false ? 'opacity-50 scale-90' : 'opacity-100'}
          hover:bg-whimsy-green/90 dark:bg-green-900/70
        `}>
          <Goblin 
            className={`
              h-12 w-12 md:h-16 md:w-16 text-emerald-800 dark:text-emerald-200
              ${isCorrect === false ? 'animate-wiggle' : ''}
              transition-all duration-300
            `}
          />
        </div>
        {isCorrect === true && (
          <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 animate-star-twinkle" />
        )}
        <div className="absolute -bottom-2 left-0 right-0 text-center text-xs font-semibold opacity-80">Mischievous Goblin</div>
      </div>
    </div>
  );
}
