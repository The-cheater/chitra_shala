import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TimelineSection from '../components/TimelineSection';
import LoveLetter from '../components/LoveLetter';
import FloatingImages from '../components/FloatingImages';

const Section2024 = () => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-start pt-16 md:pt-24 p-4 md:p-8 relative overflow-y-auto max-h-screen hide-scrollbar">
      <FloatingImages year="2024" />
      
      {/* Year Heading */}
      <motion.h1 
        className="text-8xl md:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 z-10 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        2024
      </motion.h1>
      
      <div className="w-full max-w-4xl z-10">
        <motion.div 
          className="w-full h-full backdrop-blur-sm bg-gradient-to-br from-pink-900/40 to-purple-900/30 rounded-3xl p-6 md:p-10 border border-purple-500/30 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-4">
            Our Love Tested and Strengthened
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-6">
            Through storms and sunshine, our bond grew deeper
          </p>
          <p className="text-xl text-purple-100/90 mb-8">
            This year wasn't always easy - my mistakes caused you pain, but through every challenge, our love proved its strength. You've shown me what true forgiveness means, my Kaguya.
          </p>
          
          {showContent && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-6">
                  My Apology and Promise to You
                </h3>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-pink-500/30 mr-4 flex items-center justify-center text-2xl">
                    💌
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-pink-200">My Precious Anya</h4>
                    <p className="text-lg text-pink-300">To: My Kaguya Sama</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-xl text-purple-100 mb-8">
                  <p>
                    My love, this year I failed you sometimes. When my insecurities made me act foolishly, when I made you feel unloved - these are my deepest regrets. You deserve only happiness, yet I caused you tears. For this, I'm endlessly sorry.
                  </p>
                  <p>
                    But through every storm, you've shown me the depth of your love. Your forgiveness humbles me. Your patience teaches me. Your love transforms me. I promise to grow daily to be the man you deserve.
                  </p>
                  <p>
                    Every dream I have includes you - our future home, our travels, our quiet mornings. There's no "me" without you. However many lifetimes exist, I want to spend them all making you happy.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <TimelineSection year="2024" events={[
                  {
                    date: "Early 2024",
                    title: "Our First Challenges",
                    description: "My mistakes tested us, but your love held strong",
                    emoji: "🌧️"
                  },
                  {
                    date: "Spring 2024",
                    title: "Rediscovering Each Other",
                    description: "Through honest talks, we healed and grew closer",
                    emoji: "🌸"
                  },
                  {
                    date: "Summer 2024",
                    title: "Our Stronger Bond",
                    description: "Proving that true love overcomes all obstacles",
                    emoji: "🌻"
                  },
                  {
                    date: "Your Birthday",
                    title: "Celebrating You",
                    description: "My promise to make every birthday magical",
                    emoji: "🎂"
                  },
                  {
                    date: "Present",
                    title: "Our Unbreakable Love",
                    description: "Dreaming of forever together",
                    emoji: "💞"
                  }
                ]} />
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Section2024;