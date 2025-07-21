import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Create stars
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 10
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 cosmic-gradient">
      {/* Nebula clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-purple-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[15%] right-[25%] w-[400px] h-[400px] bg-pink-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[200px] h-[200px] bg-blue-900/20 rounded-full blur-[80px]"></div>
      </div>
      
      {/* Stars */}
      <div className="absolute inset-0 starry-overlay">
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)'
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Moon */}
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 shadow-lg shadow-yellow-500/50"
        animate={{ 
          boxShadow: [
            '0 0 20px 5px rgba(255, 255, 255, 0.5)',
            '0 0 40px 15px rgba(255, 215, 0, 0.7)',
            '0 0 20px 5px rgba(255, 255, 255, 0.5)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="absolute top-4 left-6 w-8 h-8 bg-yellow-200/30 rounded-full"></div>
        <div className="absolute bottom-6 right-8 w-5 h-5 bg-yellow-200/30 rounded-full"></div>
      </motion.div>
      
      {/* Floating crown */}
      <motion.div 
        className="crown-float absolute top-[15%] left-[10%] text-yellow-300 text-4xl"
        initial={{ rotate: -15 }}
        animate={{ rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        👑
      </motion.div>
      
      {/* Comets */}
      <div className="comet absolute top-0 left-0 w-2 h-2 bg-white rounded-full shadow-comet"></div>
      <div 
        className="comet absolute top-[40vh] left-[-100px] w-1.5 h-1.5 bg-blue-300 rounded-full shadow-comet" 
        style={{ animationDelay: '7s' }}
      ></div>
    </div>
  );
};

export default Background;