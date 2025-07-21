import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoveLetter = ({ title, recipient, content }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-pink-300 mb-4">{title}</h3>
      
      <motion.div 
        className={`relative cursor-pointer glow-hover ${open ? 'min-h-[300px]' : 'h-48'}`}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30 p-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-pink-900/50"></div>
          
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-pink-500/30 mr-3 flex items-center justify-center">
                <span className="text-xl">💌</span>
              </div>
              <div>
                <h4 className="font-bold text-pink-200">{recipient}</h4>
                <p className="text-xs text-pink-300">To: Your Beautiful Soul</p>
              </div>
            </div>
            
            <div className="overflow-y-auto flex-grow">
              {content.map((paragraph, index) => (
                <p key={index} className="text-purple-100 text-sm mb-2">
                  {paragraph}
                </p>
              ))}
              
              <p className="text-pink-300 mt-4">Forever yours,</p>
              <p className="text-pink-300 font-bold">Your Soulmate</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoveLetter;