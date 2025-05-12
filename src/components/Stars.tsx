
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
}

export function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 0.3 + 0.1}rem`,
          delay: `${Math.random() * 5}s`,
        });
      }
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars every minute to add dynamic feeling
    const interval = setInterval(generateStars, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stars hidden dark:block">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
