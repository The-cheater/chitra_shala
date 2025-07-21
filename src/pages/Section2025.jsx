import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ConfettiEffect from '../components/ConfettiEffect';
import LoveLetter from '../components/LoveLetter';
import FloatingImages from '../components/FloatingImages';
import { useAppContext } from '../contexts/AppContext';
import kissGif from '../assest/2025/kiss.gif';

const Section2025 = () => {
  const { showConfetti, blowCandles, candlesLit } = useAppContext();
  const [showContent, setShowContent] = useState(false);
  const [celebrationStarted, setCelebrationStarted] = useState(false);
  const [cardAnimated, setCardAnimated] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const handleBlowCandles = () => {
    blowCandles();
    setTimeout(() => {
      setCelebrationStarted(true);
    }, 1000);
  };

  return (
    <div 
      ref={containerRef} 
      className={`w-screen h-screen flex-shrink-0 flex p-4 md:p-8 relative overflow-y-auto max-h-screen hide-scrollbar ${
        celebrationStarted 
          ? 'flex-col items-center justify-start pt-24' 
          : 'flex-col items-center justify-center'
      }`}
    >
      {showConfetti && <ConfettiEffect />}
      <FloatingImages year="2025" />
      
      {/* Before celebration - centered cake */}
      {!celebrationStarted && (
        <motion.div 
          className="flex flex-col items-center justify-center text-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 z-10 mb-8 text-center break-words"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            2025
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-[10rem]">🎂</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300 text-center break-words">
              Make a Wish!
            </h1>
            <p className="text-2xl text-purple-200 mb-8 max-w-2xl">
              Blow out the candles to start your birthday celebration
            </p>
          </motion.div>
          
          {showContent && (
            <motion.button
              className="mt-8 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl shadow-lg glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBlowCandles}
              disabled={!candlesLit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {candlesLit ? "Blow Out My Candles!" : "Make a Wish!"}
            </motion.button>
          )}
        </motion.div>
      )}
      
      {/* After celebration - content only */}
      {celebrationStarted && (
        <>
          <motion.div 
            className="w-full max-w-6xl z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className={
                `mx-auto max-w-lg md:max-w-xl lg:max-w-2xl p-6 md:p-10 bg-gradient-to-br from-purple-900/70 to-pink-900/60 rounded-2xl border-4 border-pink-400/40 shadow-2xl shadow-pink-500/20 backdrop-blur-md space-message-card ` +
                (cardAnimated ? '' : 'will-animate')
              }
              initial={{ opacity: 0, scale: 0.8, y: 40, rotate: -5 }}
              animate={cardAnimated ? { opacity: 1, scale: 1, y: 0, rotate: 0 } : { opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
              onAnimationComplete={() => setCardAnimated(true)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300 text-center break-words">
                  Happy Birthday!
                </h1>
                <p className="text-2xl md:text-3xl text-purple-200">
                  Celebrating you in 2025 and beyond
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-pink-300 mb-8 text-center">
                  To My Anya
                </h2>
                
                <div className="space-y-6 text-xl md:text-2xl text-purple-100">
                  <p>
                    My dearest Anya, on this special day I come to you with a heart full of love and regret. 
                    I'm sorry for every time I failed to show you how precious you are, for moments when my 
                    actions made you doubt my love. You deserve nothing less than complete devotion, and I 
                    promise to spend my life proving you're the most important person in my world.
                  </p>
                  
                  <p>
                    Your patience with my flaws humbles me. Your forgiveness for my mistakes astounds me. 
                    The way you love me despite everything inspires me to be better every day. You've seen 
                    me at my worst yet choose to stay - this is the greatest gift I'll ever receive.
                  </p>

                  <p>
                    I want to build a lifetime of memories with you - from our first home together to growing 
                    old watching the stars. I dream of the day I can call you my wife, of creating a family 
                    that's as beautiful as your soul. Every step I take from now on is toward that future.
                  </p>

                  <p className="text-3xl text-pink-300 font-bold mt-8">
                    Happy Birthday, my future wife. I vow to love you until my last breath and beyond. 
                    However many lifetimes may come, I'll find you in each one.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Kiss GIF at the bottom of the scrollable content */}
          <div className="w-full flex justify-center mt-auto pt-32 pb-8">
            <img src={kissGif} alt="Kiss Gif" className="h-48 w-auto rounded-xl shadow-xl border-4 border-pink-200 bg-white/30" />
          </div>
        </>
      )}
      
      {/* Floating balloons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 text-4xl"
          style={{
            left: `${10 + i * 10}%`,
            fontSize: `${2 + Math.random() * 3}rem`
          }}
          initial={{ y: "100vh" }}
          animate={{ y: "-100vh" }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          🎈
        </motion.div>
      ))}
    </div>
  );
};

export default Section2025;