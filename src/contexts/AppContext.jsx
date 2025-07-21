import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [candlesLit, setCandlesLit] = useState(true);

  const toggleMusic = () => setIsMusicPlaying(!isMusicPlaying);
  
  const blowCandles = () => {
    setCandlesLit(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <AppContext.Provider
      value={{
        isMusicPlaying,
        toggleMusic,
        showConfetti,
        setShowConfetti,
        candlesLit,
        blowCandles
      }}
    >
      {children}
    </AppContext.Provider>
  );
};