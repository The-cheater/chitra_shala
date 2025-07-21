import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../contexts/AppContext';

const BirthdayCake = () => {
  const { candlesLit } = useAppContext();
  
  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.05 }}
    >
      {/* Cake layers */}
      <div className="relative">
        {/* Bottom layer */}
        <div className="w-64 h-20 bg-gradient-to-r from-pink-300 to-pink-200 rounded-t-lg"></div>
        {/* Middle layer */}
        <div className="w-52 h-16 bg-gradient-to-r from-pink-200 to-pink-100 rounded-t-lg mx-auto"></div>
        {/* Top layer */}
        <div className="w-40 h-12 bg-gradient-to-r from-pink-100 to-white rounded-t-lg mx-auto"></div>
        
        {/* Frosting */}
        <div className="absolute top-0 left-0 w-full">
          <div className="absolute top-[-5px] w-full h-4 bg-pink-400 rounded-full"></div>
          <div className="absolute top-16 w-52 h-4 bg-pink-300 rounded-full left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute top-32 w-40 h-4 bg-pink-200 rounded-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      {/* Candles */}
      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 flex justify-center space-x-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative">
            {/* Candle */}
            <div className="w-3 h-20 mx-auto bg-gradient-to-b from-blue-300 to-blue-200 rounded-sm"></div>
            
            {/* Flame */}
            {candlesLit && (
              <motion.div 
                className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 w-4 h-8"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="w-4 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-yellow-300/50 blur-[8px]"></div>
              </motion.div>
            )}
            
            {/* Extinguished candle smoke */}
            {!candlesLit && (
              <motion.div 
                className="absolute top-[-30px] left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -20 }}
                transition={{ duration: 2 }}
              >
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      {/* Decoration */}
      <div className="absolute top-[-10px] left-0 w-full flex justify-between px-4">
        <motion.div
          animate={{ rotate: [0, 15, 0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          🌟
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BirthdayCake;