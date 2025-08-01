import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useAppContext } from '../contexts/AppContext';
import musicFile from '../assest/Christina Perri - A Thousand Years (Lyrics) - 7clouds.mp3';

const MusicPlayer = () => {
  const { isMusicPlaying, toggleMusic } = useAppContext();
  const audioRef = useRef(null);
  const [isAutoPlayBlocked, setIsAutoPlayBlocked] = useState(false);
  
  useEffect(() => {
    // Try to play automatically when component mounts
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          // Autoplay worked
          setIsAutoPlayBlocked(false);
        })
        .catch(error => {
          // Autoplay was prevented
          setIsAutoPlayBlocked(true);
          console.log("Autoplay prevented:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current.play().catch(e => console.log("Play prevented", e));
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying]);

  // Show a message if autoplay was blocked
  if (isAutoPlayBlocked) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => {
            toggleMusic();
            setIsAutoPlayBlocked(false);
          }}
          className="glow-hover p-3 rounded-full bg-purple-900/50 backdrop-blur-sm text-pink-200 hover:text-white transition-colors"
        >
          <FaVolumeMute size={24} />
        </button>
        <div className="absolute top-full right-0 mt-2 w-64 p-2 bg-purple-900/80 backdrop-blur-sm text-white text-sm rounded">
          Click to enable background music
        </div>
        <audio ref={audioRef} loop src={musicFile} />
      </div>
    );
  }
  
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