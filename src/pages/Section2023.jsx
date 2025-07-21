import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TimelineSection from '../components/TimelineSection';
import LoveLetter from '../components/LoveLetter';
import FloatingImages from '../components/FloatingImages';

const Section2023 = () => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-start pt-16 md:pt-24 p-4 md:p-8 relative overflow-y-auto max-h-screen hide-scrollbar">
      <FloatingImages year="2023" />
      
      {/* Year Heading */}
      <motion.h1 
        className="text-8xl md:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 z-10 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        2023
      </motion.h1>
      
      <div className="w-full max-w-4xl z-10">
        <motion.div 
          className="w-full h-full backdrop-blur-sm bg-gradient-to-br from-purple-900/40 to-indigo-900/30 rounded-3xl p-6 md:p-10 border border-purple-500/30 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-4">
            Our Cosmic Love Story Begins
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-6">
            The moment I saw you, my heart knew its home
          </p>
          <p className="text-xl text-purple-100/90 mb-8">
            Our journey started in November 2022 when I first saw you in college. Your beauty and grace captivated me instantly, and after nights of heartfelt conversations, I gathered the courage to express my feelings in early December. Then on June 5, 2023, you made me the happiest person by accepting my love.
          </p>
          
          {showContent && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-6">
                  My Love Letter to You, Anya
                </h3>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-pink-500/30 mr-4 flex items-center justify-center text-2xl">
                    💌
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-pink-200">My Dearest Anya</h4>
                    <p className="text-lg text-pink-300">To: The Love of My Life</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-xl text-purple-100 mb-8">
                  <p>
                    My beautiful Anya, from that first moment I saw you in November, my heart recognized its missing piece. Your radiant smile, your gentle nature, the way your eyes light up when you laugh - these became the constellations that guide my world.
                  </p>
                  <p>
                    I still remember the nervous excitement when I confessed my feelings in December, and the overwhelming joy when you said yes on June 5th. You've given me more happiness than I ever dreamed possible. Your calm presence soothes my soul, your kindness inspires me daily, and your love makes every day brighter.
                  </p>
                  <p>
                    This year with you has been the most magical of my life. From our first conversations to our first dates, every moment with you feels like a precious gift. I fall more in love with you with each passing day, my darling.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <TimelineSection year="2023" events={[
                  { date: 'November 2022', title: 'First Saw You', description: 'The moment my heart found its home' },
                  { date: 'Early December 2022', title: 'Confessed My Feelings', description: 'Took the bravest step of my life' },
                  { date: 'June 5, 2023', title: 'You Said Yes!', description: 'The happiest day of my life' },
                  { date: 'Rest of 2023', title: 'Growing Together', description: 'Every day more in love' }
                ]} />
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Section2023;