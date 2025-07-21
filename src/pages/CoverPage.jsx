import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import astroImg from '../assest/astro.png';

const CoverPage = ({ onCutRibbon }) => {
  const [ribbonCut, setRibbonCut] = useState(false);
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);
  
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
    
    // Create initial comets
    const initialComets = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      size: 2 + Math.random() * 2,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3
    }));
    setComets(initialComets);
    
    // Add new comets periodically
    const cometInterval = setInterval(() => {
      setComets(prev => [
        ...prev.slice(-5),
        {
          id: Date.now(),
          size: 2 + Math.random() * 2,
          delay: Math.random() * 2,
          duration: 4 + Math.random() * 3
        }
      ]);
    }, 5000);
    
    return () => clearInterval(cometInterval);
  }, []);
  
  const handleCutRibbon = () => {
    setRibbonCut(true);
    setTimeout(() => {
      onCutRibbon();
    }, 2000);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0118] via-[#1a0638] to-[#0a0e2a] p-4 relative overflow-hidden">
      {/* Nebula background clouds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[15%] right-[25%] w-[700px] h-[700px] bg-pink-900/30 rounded-full blur-[220px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[180px]"></div>
      </div>
      
      {/* Animated stars */}
      <div className="absolute inset-0">
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
      
      {/* Comets */}
      {comets.map(comet => (
        <motion.div
          key={comet.id}
          className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full shadow-comet"
          initial={{ 
            x: -100,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{ 
            x: window.innerWidth + 100,
            y: Math.random() * 100,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: comet.duration,
            delay: comet.delay,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Floating astronaut */}
      <motion.div
        className="absolute z-20 w-40 h-40"
        initial={{ 
          x: -200,
          y: '30%',
          opacity: 0
        }}
        animate={{ 
          x: '110%',
          y: ['30%', '25%', '30%'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 15,
          ease: "linear",
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <img 
          src={astroImg}  // Updated to use imported image
          alt="Floating astronaut"
          className="w-full h-full object-contain"
        />
        {/* Small light effect from astronaut */}
        <motion.div
          className="absolute -bottom-4 left-1/2 w-32 h-8 bg-blue-400/20 blur-lg rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      {/* Floating planets */}
      <motion.div 
        className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-600 to-orange-500 shadow-lg"
        animate={{ 
          rotate: 360,
          y: [0, -30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="absolute top-4 left-8 w-8 h-8 bg-orange-700/30 rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 shadow-lg"
        animate={{ 
          rotate: 360,
          y: [0, 30, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          y: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="absolute top-8 left-6 w-10 h-10 bg-purple-700/30 rounded-full"></div>
      </motion.div>
      
      {/* Welcome message */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink-300 mb-6 drop-shadow-glow">
          A Cosmic Journey Through Time
        </h1>
        <motion.div
          className="text-5xl md:text-8xl font-bold mb-8"
          animate={{ 
            textShadow: [
              "0 0 10px #f472b6, 0 0 20px #f472b6",
              "0 0 20px #f472b6, 0 0 30px #f472b6, 0 0 40px #f472b6",
              "0 0 10px #f472b6, 0 0 20px #f472b6"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-pink-200 to-purple-200">
            For My Anya
          </span>
        </motion.div>
        <p className="text-xl md:text-2xl text-purple-200 mt-8 max-w-2xl mx-auto">
          A celestial gift awaits among the stars of our love story
        </p>
      </motion.div>
      
      {/* Cosmic Gift Box */}
      <motion.div 
        className="relative z-10 cursor-pointer"
        onClick={handleCutRibbon}
        whileHover={{ scale: 1.05 }}
      >
        {/* Animated cosmic ring/aura */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-pink-300/30 pointer-events-none shadow-2xl shadow-pink-400/20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { 
              duration: 30, 
              repeat: Infinity, 
              ease: 'linear' 
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
        
        {/* Gift Box */}
        <div className="w-80 h-80 bg-gradient-to-br from-[#4a044e] via-[#7e0344] to-[#2e0349] rounded-xl shadow-2xl relative overflow-visible border-2 border-purple-500/50">
          {/* Cosmic patterns inside the gift */}
          <div className="absolute inset-4 rounded-md overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
            
            {/* Swirling galaxy effect */}
            <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-purple-900 to-pink-700 blur-xl animate-spin-slow"></div>
            
            {/* Stars inside the gift */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3, 
                  repeat: Infinity,
                  delay: Math.random() * 2 
                }}
              />
            ))}
          </div>
          
          {/* Ribbon Horizontal */}
          <motion.div 
            className="absolute top-1/2 left-0 w-full h-8 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 transform -translate-y-1/2"
            animate={ribbonCut ? { 
              scaleX: 0,
              opacity: 0
            } : {}}
            transition={{ duration: 0.8 }}
          />
          
          {/* Ribbon Vertical */}
          <motion.div 
            className="absolute left-1/2 top-0 h-full w-8 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-300 transform -translate-x-1/2"
            animate={ribbonCut ? { 
              scaleY: 0,
              opacity: 0
            } : {}}
            transition={{ duration: 0.8 }}
          />
          
          {/* Bow */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={ribbonCut ? { 
              scale: 0,
              opacity: 0
            } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brilliant.png')] opacity-20"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Scissors */}
          <motion.div
            className="absolute -top-16 -right-16 text-6xl text-yellow-200 drop-shadow-lg"
            animate={ribbonCut ? { 
              rotate: 45,
              x: 100,
              y: -100,
              opacity: 0
            } : {
              rotate: [0, 15, -15, 0]
            }}
            transition={{ 
              duration: ribbonCut ? 1 : 2,
              repeat: ribbonCut ? 0 : Infinity
            }}
          >
            ✂️
          </motion.div>
          
          {/* Gift Lid */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#7e0344] to-[#4a044e] rounded-t-xl border-b-2 border-purple-500/50"></div>
          
          {/* Cosmic particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-yellow-200 blur-md"
                style={{
                  width: `${16 + Math.random() * 16}px`,
                  height: `${16 + Math.random() * 16}px`,
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
                  opacity: 0.3 + Math.random() * 0.3
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 3, 
                  repeat: Infinity,
                  delay: Math.random() * 2 
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Open box effect */}
        {ribbonCut && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-8xl text-yellow-300 animate-pulse">✨</div>
            
            {/* Shooting star effect */}
            <motion.div
              className="absolute left-0 top-1/2 w-64 h-2 bg-gradient-to-r from-yellow-200/80 to-transparent rounded-full shadow-lg"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 400, opacity: [0, 1, 0] }}
              transition={{ duration: 1.2 }}
            />
            
            {/* Expanding light */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-300/10 to-pink-400/10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </motion.div>
      
      {/* Instruction */}
      <motion.div
        className="mt-16 text-xl text-pink-200 font-bold z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {ribbonCut ? (
          <>
            <span className="text-2xl">Unwrapping your cosmic surprise...</span>
            <motion.div 
              className="mt-6 w-12 h-12 border-4 border-pink-300 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </>
        ) : (
          <>
            <span className="text-2xl mb-2">Your Cosmic Gift Awaits</span>
            <span className="text-lg font-normal max-w-md text-center">
              Cut the ribbon to begin your journey through our celestial love story
            </span>
          </>
        )}
      </motion.div>
      
      {/* Floating sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          ✨
        </motion.div>
      ))}
      
      {/* Constellation lines */}
      {[...Array(15)].map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = startX + (Math.random() * 20 - 10);
        const endY = startY + (Math.random() * 20 - 10);
        
        return (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.min(startX, endX)}%`,
              top: `${Math.min(startY, endY)}%`,
              width: `${Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))}%`,
              transform: `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`,
              transformOrigin: '0 0'
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        );
      })}
    </div>
  );
};

export default CoverPage;