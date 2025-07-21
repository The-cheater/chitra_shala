import React, { useEffect, useState } from 'react';

const CursorEffects = () => {
  const [sparkles, setSparkles] = useState([]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create new sparkle
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4
      };
      
      setSparkles(prev => [...prev, newSparkle]);
      
      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
      }, 1000);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle-trail"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: 0,
            animation: 'fadeOut 1s forwards'
          }}
        />
      ))}
    </div>
  );
};

export default CursorEffects;