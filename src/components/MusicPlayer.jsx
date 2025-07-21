import React, { useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useAppContext } from '../contexts/AppContext';
import musicFile from '../assest/Christina Perri - A Thousand Years (Lyrics) - 7clouds.mp3';

const MusicPlayer = () => {
  const { isMusicPlaying, toggleMusic } = useAppContext();
  const audioRef = useRef(null);
  
  useEffect(() => {
    // Initialize audio
    if (isMusicPlaying) {
      audioRef.current.play().catch(e => console.log("Auto-play prevented", e));
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying]);
  
  return (
    <div className="fixed top-6 right-6 z-50">
      <button 
        onClick={toggleMusic}
        className="glow-hover p-3 rounded-full bg-purple-900/50 backdrop-blur-sm text-pink-200 hover:text-white transition-colors"
      >
        {isMusicPlaying ? <FaVolumeUp size={24} /> : <FaVolumeMute size={24} />}
      </button>
      
      <audio ref={audioRef} loop src={musicFile} />
    </div>
  );
};

export default MusicPlayer;