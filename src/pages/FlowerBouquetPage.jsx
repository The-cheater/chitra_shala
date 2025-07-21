import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlowerBouquetPage = ({ onAcceptBouquet }) => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [showText, setShowText] = useState(false);
  const [flowers, setFlowers] = useState([]);
  
  // Flower components with enhanced designs
  const Rose = ({ color = 'pink', size = 1 }) => (
    <motion.div 
      className="relative"
      style={{ 
        width: `${size * 60}px`, 
        height: `${size * 60}px`,
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))'
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    >
      {/* Stem */}
      <div className="absolute bottom-0 left-1/2 w-2 h-20 bg-green-600 transform -translate-x-1/2"></div>
      
      {/* Leaves */}
      <div className="absolute bottom-16 left-1/4 w-6 h-4 bg-green-500 rounded-full transform rotate-[-30deg]"></div>
      <div className="absolute bottom-14 right-1/4 w-6 h-4 bg-green-500 rounded-full transform rotate-[30deg]"></div>
      
      {/* Rose */}
      <div className={`absolute top-0 left-1/2 w-full h-full transform -translate-x-1/2`}>
        <div className={`absolute top-1/2 left-1/2 w-6 h-8 bg-${color}-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-[-15deg]`}></div>
        <div className={`absolute top-1/2 left-1/2 w-6 h-8 bg-${color}-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-[15deg]`}></div>
        <div className={`absolute top-1/2 left-1/2 w-6 h-8 bg-${color}-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg]`}></div>
        <div className={`absolute top-1/2 left-1/2 w-6 h-8 bg-${color}-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-[75deg]`}></div>
        <div className={`absolute top-1/2 left-1/2 w-7 h-7 bg-${color}-400 rounded-full transform -translate-x-1/2 -translate-y-1/2`}></div>
      </div>
    </motion.div>
  );

  const Tulip = ({ color = 'red', size = 1 }) => (
    <motion.div 
      className="relative"
      style={{ 
        width: `${size * 50}px`, 
        height: `${size * 70}px`,
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))'
      }}
      whileHover={{ scale: 1.1, rotate: -5 }}
    >
      {/* Stem */}
      <div className="absolute bottom-0 left-1/2 w-2 h-24 bg-green-600 transform -translate-x-1/2"></div>
      
      {/* Tulip */}
      <div className={`absolute top-4 left-1/2 w-full h-full transform -translate-x-1/2`}>
        <div className={`absolute top-0 left-0 w-6 h-12 bg-${color}-400 rounded-t-full transform origin-bottom rotate-[-20deg]`}></div>
        <div className={`absolute top-0 right-0 w-6 h-12 bg-${color}-400 rounded-t-full transform origin-bottom rotate-[20deg]`}></div>
        <div className={`absolute top-0 left-1/2 w-6 h-12 bg-${color}-500 rounded-t-full transform -translate-x-1/2`}></div>
      </div>
    </motion.div>
  );

  const Daisy = ({ size = 1 }) => (
    <motion.div 
      className="relative"
      style={{ 
        width: `${size * 60}px`, 
        height: `${size * 60}px`,
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))'
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {/* Stem */}
      <div className="absolute bottom-0 left-1/2 w-2 h-20 bg-green-600 transform -translate-x-1/2"></div>
      
      {/* Daisy */}
      <div className="absolute top-0 left-1/2 w-full h-full transform -translate-x-1/2">
        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-yellow-400"></div>
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-8 bg-white rounded-full origin-center border border-gray-100"
            style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-8px)`}}
          ></div>
        ))}
      </div>
    </motion.div>
  );

  const Lavender = ({ size = 1 }) => (
    <motion.div 
      className="relative"
      style={{ 
        width: `${size * 40}px`, 
        height: `${size * 100}px`,
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))'
      }}
      whileHover={{ scale: 1.05, rotate: -3 }}
    >
      {/* Stem */}
      <div className="absolute bottom-0 left-1/2 w-1.5 h-32 bg-green-600 transform -translate-x-1/2"></div>
      
      {/* Lavender */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="w-4 h-4 bg-purple-400 rounded-full mb-1 border border-purple-300"
            style={{ 
              transform: `scale(${0.8 + i * 0.05})`,
              opacity: 0.7 + i * 0.05
            }}
          ></div>
        ))}
      </div>
    </motion.div>
  );

  const Sunflower = ({ size = 1 }) => (
    <motion.div 
      className="relative"
      style={{ 
        width: `${size * 70}px`, 
        height: `${size * 70}px`,
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))'
      }}
      whileHover={{ scale: 1.1, rotate: 7 }}
    >
      {/* Stem */}
      <div className="absolute bottom-0 left-1/2 w-2 h-24 bg-green-600 transform -translate-x-1/2"></div>
      
      {/* Sunflower */}
      <div className="absolute top-0 left-1/2 w-full h-full transform -translate-x-1/2">
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-brown-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-yellow-700"></div>
        {[...Array(16)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-3 h-12 bg-yellow-400 rounded-full origin-center"
            style={{ transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-18px)`}}
          ></div>
        ))}
      </div>
    </motion.div>
  );

  const flowerTypes = [
    { component: Rose, props: { color: 'pink' }, size: 0.8 },
    { component: Rose, props: { color: 'red' }, size: 1 },
    { component: Rose, props: { color: 'yellow' }, size: 0.9 },
    { component: Tulip, props: { color: 'purple' }, size: 0.85 },
    { component: Tulip, props: { color: 'pink' }, size: 0.95 },
    { component: Daisy, props: {}, size: 0.75 },
    { component: Lavender, props: {}, size: 1.1 },
    { component: Sunflower, props: {}, size: 1.05 },
  ];

  useEffect(() => {
    // Generate flowers
    const generateFlowers = () => {
      const numFlowers = 999;
      const newFlowers = [];
      
      for (let i = 0; i < numFlowers; i++) {
        // Choose a random flower type
        const typeIndex = Math.floor(Math.random() * flowerTypes.length);
        const flowerType = flowerTypes[typeIndex];
        
        // Random position off-screen
        const side = Math.floor(Math.random() * 4);
        let initialX, initialY;
        
        switch(side) {
          case 0: // Top
            initialX = Math.random() * window.innerWidth;
            initialY = -100;
            break;
          case 1: // Right
            initialX = window.innerWidth + 100;
            initialY = Math.random() * window.innerHeight;
            break;
          case 2: // Bottom
            initialX = Math.random() * window.innerWidth;
            initialY = window.innerHeight + 100;
            break;
          case 3: // Left
            initialX = -100;
            initialY = Math.random() * window.innerHeight;
            break;
        }
        
        // Final position in bouquet
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 150;
        const bouquetCenterX = window.innerWidth / 2;
        const bouquetCenterY = window.innerHeight / 2 + 100;
        
        newFlowers.push({
          id: i,
          Component: flowerType.component,
          props: { ...flowerType.props, size: flowerType.size * (0.8 + Math.random() * 0.4) },
          initial: {
            x: initialX,
            y: initialY,
            rotate: Math.random() * 360,
            scale: 0.2,
            opacity: 0
          },
          final: {
            x: bouquetCenterX + Math.cos(angle) * distance,
            y: bouquetCenterY + Math.sin(angle) * distance,
            rotate: Math.random() * 40 - 20,
            scale: 1,
            opacity: 1
          }
        });
      }
      
      return newFlowers;
    };
    
    setFlowers(generateFlowers());
    
    // Start animations
    const assemblyTimer = setTimeout(() => setIsAssembled(true), 500);
    const textTimer = setTimeout(() => setShowText(true), 3500);
    
    return () => {
      clearTimeout(assemblyTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-lavender-50 to-sky-50 p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/70 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-50/50 to-transparent z-0"></div>
        
        {/* Floating petals */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute w-8 h-8 bg-pink-200 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`
            }}
            animate={{ 
              y: [0, -20, 0, -15, 0],
              x: [0, 10, 0, -10, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Flower bouquet */}
      <div className="absolute z-10 w-full h-full">
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            className="absolute"
            initial={flower.initial}
            animate={isAssembled ? flower.final : flower.initial}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 50,
              delay: 0.5 + (flower.id % 20) * 0.07,
              opacity: { duration: 1 }
            }}
            style={{ 
              left: 0,
              top: 0
            }}
          >
            <flower.Component {...flower.props} />
          </motion.div>
        ))}
      </div>
      
      {/* Bouquet center */}
      {isAssembled && (
        <motion.div 
          className="absolute z-20 w-8 h-8 bg-yellow-300 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
        />
      )}
      
      {/* Text content */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="text-center z-30 mt-[50vh] bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-rose-700 mb-4 font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              For My Beloved
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-purple-800 italic mb-6 font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              "You always asked me to make you a rose by hand, so here it is - crafted with love in code"
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                onClick={onAcceptBouquet}
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 text-xl font-serif"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 0 25px rgba(225, 29, 72, 0.5)',
                  background: 'linear-gradient(to right, #f43f5e, #ec4899)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Accept My Bouquet
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-3xl text-rose-400 z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.4 + Math.random() * 0.3
          }}
          animate={{ 
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 15, 0, -15, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FlowerBouquetPage;