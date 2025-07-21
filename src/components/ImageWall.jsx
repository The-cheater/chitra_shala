import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ImageWall = ({ year }) => {
  const [loaded, setLoaded] = useState(Array(9).fill(false));
  
  useEffect(() => {
    // Simulate images loading with delay
    const loaders = loaded.map((_, index) => {
      return setTimeout(() => {
        setLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 300);
    });
    
    return () => loaders.forEach(timer => clearTimeout(timer));
  }, [year]);
  
  // Different emojis for different years
  const yearEmojis = {
    '2023': ['🌹', '📷', '💑', '🌠', '🎉', '🏞️', '🎈', '🍷', '🎁','🌊', '🌅', '🏖️', '🌟', '🎭', '🍽️', '🎡', '🎶', '🌉','🎂', '🎁', '🎈', '🥂', '✨', '🎊', '🎀', '🕯️', '🎵'],
    '2024': ['🌹', '📷', '💑', '🌠', '🎉', '🏞️', '🎈', '🍷', '🎁','🌊', '🌅', '🏖️', '🌟', '🎭', '🍽️', '🎡', '🎶', '🌉','🎂', '🎁', '🎈', '🥂', '✨', '🎊', '🎀', '🕯️', '🎵'],
  
    '2025': ['🌹', '📷', '💑', '🌠', '🎉', '🏞️', '🎈', '🍷', '🎁','🌊', '🌅', '🏖️', '🌟', '🎭', '🍽️', '🎡', '🎶', '🌉','🎂', '🎁', '🎈', '🥂', '✨', '🎊', '🎀', '🕯️', '🎵'],
    
  };
  
  return (
    <div className="grid grid-cols-3 gap-3">
      {loaded.map((isLoaded, index) => (
        <motion.div
          key={index}
          className="aspect-square rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1, zIndex: 10 }}
        >
          <div className="w-full h-full bg-purple-800/30 border border-purple-500/30 flex items-center justify-center">
            {isLoaded ? (
              <div className="text-3xl">
                {yearEmojis[year][index]}
              </div>
            ) : (
              <div className="w-6 h-6 border-t-2 border-r-2 border-pink-500 rounded-full animate-spin"></div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageWall;