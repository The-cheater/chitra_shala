import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import MusicPlayer from './components/MusicPlayer';
import CursorEffects from './components/CursorEffects';
import Section2023 from './pages/Section2023';
import Section2024 from './pages/Section2024';
import Section2025 from './pages/Section2025';
import CoverPage from './pages/CoverPage';
import FlowerBouquetPage from './pages/FlowerBouquetPage';
import { AppProvider } from './contexts/AppContext';

function App() {
  const [showBouquet, setShowBouquet] = useState(true);
  const [showCover, setShowCover] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0); // 0: right, 1: left

  // Section components
  const sections = [
    <Section2023 key={0} />,
    <Section2024 key={1} />,
    <Section2025 key={2} />
  ];

  const navigate = (newIndex) => {
    setDirection(newIndex > currentSection ? 0 : 1);
    setCurrentSection(newIndex);
  };

  const handleAcceptBouquet = () => {
    setShowBouquet(false);
    setShowCover(true);
  };

  const handleCutRibbon = () => {
    setShowCover(false);
  };

  return (
    <AppProvider>
      <div className="relative w-screen h-screen overflow-hidden">
        <Background />
        <MusicPlayer />
        <CursorEffects />
        
        <AnimatePresence mode="wait">
          {showBouquet ? (
            <FlowerBouquetPage key="bouquet" onAcceptBouquet={handleAcceptBouquet} />
          ) : showCover ? (
            <CoverPage key="cover" onCutRibbon={handleCutRibbon} />
          ) : (
            <motion.div
              key={currentSection}
              initial={{ 
                x: direction === 0 ? '100vw' : '-100vw',
                opacity: 0 
              }}
              animate={{ 
                x: 0,
                opacity: 1
              }}
              exit={{ 
                x: direction === 0 ? '-100vw' : '100vw',
                opacity: 0 
              }}
              transition={{ 
                duration: 0.8, 
                ease: 'easeInOut' 
              }}
              className="absolute inset-0"
            >
              {sections[currentSection]}
            </motion.div>
          )}
        </AnimatePresence>
        
        {!showBouquet && !showCover && (
          <>
            {/* Navigation Dots */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => navigate(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSection === index 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-purple-700 opacity-50'
                  }`}
                />
              ))}
            </div>
            
            {/* Left Arrow Button */}
            {currentSection > 0 && (
              <button
                onClick={() => navigate(currentSection - 1)}
                className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-purple-900/50 backdrop-blur-sm text-pink-200 hover:text-white transition-colors glow-hover"
              >
                &#8592;
              </button>
            )}
            
            {/* Right Arrow Button */}
            {currentSection < 2 && (
              <button
                onClick={() => navigate(currentSection + 1)}
                className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-purple-900/50 backdrop-blur-sm text-pink-200 hover:text-white transition-colors glow-hover"
              >
                &#8594;
              </button>
            )}
          </>
        )}
      </div>
    </AppProvider>
  );
}

export default App;