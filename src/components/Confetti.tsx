
import { useEffect, useState } from 'react';

interface ConfettiProps {
  isActive: boolean;
}

export function Confetti({ isActive }: ConfettiProps) {
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    if (isActive) {
      const newPieces = [];
      const colors = [
        'bg-pink-500', 'bg-yellow-500', 'bg-blue-500', 
        'bg-green-500', 'bg-purple-500', 'bg-red-500'
      ];
      
      for (let i = 0; i < 50; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = `${Math.random() * 100}%`;
        const delay = `${Math.random() * 0.5}s`;
        const size = `${Math.random() * 0.5 + 0.5}rem`;
        const animationDuration = ['animate-confetti-slow', 'animate-confetti-medium', 'animate-confetti-fast'];
        const animation = animationDuration[Math.floor(Math.random() * animationDuration.length)];
        
        newPieces.push(
          <div 
            key={i}
            className={`absolute ${color} ${animation} rounded-full z-50`}
            style={{
              left,
              top: '-5%',
              width: size,
              height: size,
              animationDelay: delay,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        );
      }
      
      setPieces(newPieces);
      
      // Clear confetti after animation completes
      const timer = setTimeout(() => {
        setPieces([]);
      }, 6000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!pieces.length) return null;
  
  return (
    <div className="confetti-container">
      {pieces}
    </div>
  );
}
