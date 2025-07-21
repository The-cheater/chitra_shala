import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState([]);
  
  useEffect(() => {
    // Generate confetti pieces
    const pieces = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      size: 5 + Math.random() * 10,
      color: ['#f472b6', '#a78bfa', '#fbbf24', '#60a5fa'][Math.floor(Math.random() * 4)],
      rotation: Math.random() * 360,
      duration: 2 + Math.random() * 3
    }));
    
    setConfetti(pieces);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}vw`,
            top: `${piece.y}vh`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            rotate: piece.rotation
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [`${piece.x}vw`, `${piece.x + (Math.random() * 20 - 10)}vw`],
            rotate: piece.rotation + 360,
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: piece.duration,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;