
import React, { useState } from 'react';
import { Book, BookOpen } from 'lucide-react';
import { Confetti } from './Confetti';
import { AnimatedCharacters } from './AnimatedCharacters';
import { Button } from '@/components/ui/button';

// Our collection of riddles (expanded to 20)
const riddles = [
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "echo",
    hint: "I bounce back what you say."
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "footsteps",
    hint: "You make these as you walk."
  },
  {
    question: "What has keys but no locks, space but no room, and you can enter but not go in?",
    answer: "keyboard",
    hint: "You use me to type."
  },
  {
    question: "What has a head and a tail, but no body?",
    answer: "coin",
    hint: "I jingle in your pocket."
  },
  {
    question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer: "map",
    hint: "I help you find your way."
  },
  {
    question: "I'm light as a feather, but the strongest person can't hold me for more than a few minutes. What am I?",
    answer: "breath",
    hint: "You do this automatically."
  },
  {
    question: "What gets wetter as it dries?",
    answer: "towel",
    hint: "You use me after a shower."
  },
  {
    question: "I'm tall when I'm young, and short when I'm old. What am I?",
    answer: "candle",
    hint: "I provide light as I melt away."
  },
  {
    question: "What has many teeth but can't bite?",
    answer: "comb",
    hint: "I help style your hair."
  },
  {
    question: "What can travel around the world while staying in a corner?",
    answer: "stamp",
    hint: "I help mail reach its destination."
  },
  {
    question: "What has a neck but no head?",
    answer: "bottle",
    hint: "You drink from me."
  },
  {
    question: "What can you break, even if you never pick it up or touch it?",
    answer: "promise",
    hint: "It's about keeping your word."
  },
  {
    question: "What goes up but never comes down?",
    answer: "age",
    hint: "It increases every year."
  },
  {
    question: "What can you catch but not throw?",
    answer: "cold",
    hint: "It makes you sneeze."
  },
  {
    question: "What has hands but can't clap?",
    answer: "clock",
    hint: "I help you tell time."
  },
  {
    question: "What can fill a room but takes up no space?",
    answer: "light",
    hint: "It helps you see in the dark."
  },
  {
    question: "What has many keys but can't open a single lock?",
    answer: "piano",
    hint: "I make music when played."
  },
  {
    question: "What has a bottom at the top?",
    answer: "legs",
    hint: "You stand on them."
  },
  {
    question: "What starts with 'e', ends with 'e', but only contains one letter?",
    answer: "envelope",
    hint: "You put mail in me."
  },
  {
    question: "What has 88 keys but can't open a single door?",
    answer: "piano",
    hint: "I'm a musical instrument."
  }
];

export function MagicalBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentRiddle = riddles[currentRiddleIndex];

  const toggleBook = () => {
    setIsOpen(true);
    if (isOpen) {
      resetRiddle();
    }
  };

  const checkAnswer = () => {
    const isRight = userAnswer.toLowerCase().trim() === currentRiddle.answer.toLowerCase();
    setIsCorrect(isRight);
    
    if (isRight) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  };

  const resetRiddle = () => {
    setUserAnswer('');
    setIsCorrect(null);
    setShowHint(false);
    setShowAnswer(false);
  };

  const nextRiddle = () => {
    resetRiddle();
    setCurrentRiddleIndex((prevIndex) => (prevIndex + 1) % riddles.length);
  };

  const prevRiddle = () => {
    resetRiddle();
    setCurrentRiddleIndex((prevIndex) => (prevIndex - 1 + riddles.length) % riddles.length);
  };

  const closeBook = () => {
    setIsOpen(false);
    resetRiddle();
  };

  return (
    <div className="relative w-full max-w-3xl py-6">
      <Confetti isActive={showConfetti} />
      
      <div className="book-container w-full max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 dark:from-indigo-900 dark:to-purple-800 rounded-lg shadow-2xl">
          {/* Book Cover */}
          {!isOpen && (
            <div className="relative p-6 h-[400px] md:h-[500px] rounded-lg border-4 border-amber-800/30 dark:border-purple-700/30 flex flex-col justify-center items-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-amber-200/60 dark:bg-purple-400/30 flex items-center justify-center animate-pulse">
                  <Book className="w-12 h-12 text-amber-800 dark:text-purple-200" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-amber-100 dark:text-purple-100 text-center mt-32 text-shadow-lg">
                Daily Riddles
              </h1>
              <p className="text-amber-200/90 dark:text-purple-200/90 mt-4 text-center">
                Tap to open the magical book
              </p>
              <button 
                onClick={toggleBook}
                className="absolute inset-0 w-full h-full cursor-pointer z-10"
                aria-label="Open the magical book"
              />
            </div>
          )}
          
          {/* Inside the Book */}
          {isOpen && (
            <div className="paper-texture p-6 min-h-[500px] rounded-lg flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-800 dark:text-purple-200 text-shadow">
                  Riddle of the Day
                </h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={closeBook}
                  className="rounded-full hover:bg-amber-200/50 dark:hover:bg-purple-800/50"
                >
                  <BookOpen className="h-6 w-6 text-amber-800 dark:text-purple-200" />
                  <span className="sr-only">Close book</span>
                </Button>
              </div>
              
              <div className="flex-grow flex flex-col">
                <div className="storybook-page flex-grow mb-6 overflow-y-auto">
                  <p className="text-lg md:text-xl mb-8 font-medium text-gray-800 dark:text-gray-200">
                    {currentRiddle.question}
                  </p>
                  
                  {showHint && (
                    <div className="bg-amber-100/50 dark:bg-purple-900/50 p-3 rounded-lg mb-6">
                      <p className="text-sm italic text-amber-800 dark:text-purple-200">
                        Hint: {currentRiddle.hint}
                      </p>
                    </div>
                  )}
                  
                  {showAnswer && (
                    <div className="bg-blue-100/50 dark:bg-blue-900/50 p-3 rounded-lg mb-6">
                      <p className="text-sm italic text-blue-800 dark:text-blue-200">
                        Answer: {currentRiddle.answer}
                      </p>
                    </div>
                  )}
                  
                  <AnimatedCharacters isCorrect={isCorrect} />
                  
                  {isCorrect === true ? (
                    <div className="text-center p-4 bg-green-100/50 dark:bg-green-900/30 rounded-lg shadow-inner">
                      <p className="text-xl font-bold text-green-800 dark:text-green-200">
                        Correct! Well done! 🎉
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-4">
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Type your answer here..."
                        className={`p-3 border-2 rounded-lg bg-white/80 dark:bg-gray-800/80 
                          ${isCorrect === false ? 'border-red-400 dark:border-red-700' : 'border-amber-200 dark:border-purple-700'}
                          focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-purple-500`}
                      />
                      
                      {isCorrect === false && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                          That's not quite right. Try again!
                        </p>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap justify-between gap-2">
                  <Button
                    variant="ghost"
                    onClick={prevRiddle}
                    className="text-amber-800 dark:text-purple-200 hover:bg-amber-100 dark:hover:bg-purple-900/50"
                  >
                    Previous Riddle
                  </Button>
                  
                  <div className="flex flex-wrap gap-2">
                    {isCorrect !== true && (
                      <>
                        <Button
                          variant="outline"
                          onClick={() => setShowHint(true)}
                          className="text-amber-800 dark:text-purple-200 border-amber-300 dark:border-purple-700"
                        >
                          Give me a hint
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowAnswer(true)}
                          className="text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700"
                        >
                          Show Answer
                        </Button>
                        <Button
                          variant="default"
                          onClick={checkAnswer}
                          className="bg-amber-600 text-white hover:bg-amber-700 dark:bg-purple-700 dark:hover:bg-purple-800"
                        >
                          Check Answer
                        </Button>
                      </>
                    )}
                    {isCorrect === true && (
                      <Button
                        variant="default"
                        onClick={nextRiddle}
                        className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800"
                      >
                        Next Riddle
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Riddle Counter */}
                <div className="mt-6 text-center text-sm text-amber-800/80 dark:text-purple-200/80">
                  <p>
                    Riddle {currentRiddleIndex + 1}/{riddles.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
