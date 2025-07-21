import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// --- All image imports ---

// 2023
import img2023_1 from '../assest/2023/IMG_20240504_195603.jpg';
import img2023_2 from '../assest/2023/IMG_20240817_090427.jpg';
import img2023_3 from '../assest/2023/IMG_20240803_120840_153.jpg';
import img2023_4 from '../assest/2023/IMG_20240806_095029.jpg';
import img2023_5 from '../assest/2023/IMG-20240701-WA0024.jpg';
import img2023_6 from '../assest/2023/IMG-20240701-WA0029.jpg';
import img2023_7 from '../assest/2023/IMG-20240701-WA0009.jpg';
import img2023_8 from '../assest/2023/IMG-20230407-WA0041.jpg';
import img2023_9 from '../assest/2023/IMG20230607050125.jpg';
import img2023_10 from '../assest/2023/IMG_20230715_071351_298.jpg';
import img2023_11 from '../assest/2023/IMG_20230721_005106.jpg';
import img2023_12 from '../assest/2023/IMG_20230715_071654_999.jpg';
import img2023_13 from '../assest/2023/IMG_20240202_220300_945.jpg';
import img2023_14 from '../assest/2023/IMG_20230715_082844.jpg';
import img2023_15 from '../assest/2023/IMG_20231203_231858.jpg';
import img2023_16 from '../assest/2023/IMG_20231203_231913.jpg';
import img2023_17 from '../assest/2023/IMG_20230715_071133_925.jpg';
import img2023_18 from '../assest/2023/IMG_20230714_141352.jpg';
import img2023_19 from '../assest/2023/IMG_20230714_161731_656.jpg';
import img2023_20 from '../assest/2023/IMG-20221231-WA0055.jpg';
import img2023_21 from '../assest/2023/IMG_20230613_224630_171.jpg';

// 2024
import img2024_1 from '../assest/2024/ssnaps_75F2DB031BCFA88B517FB4CC8B10D981.jpg';
import img2024_2 from '../assest/2024/IMG-20240818-WA0090.jpg';
import img2024_3 from '../assest/2024/Picsart_24-08-18_11-05-12-575.jpg';
import img2024_4 from '../assest/2024/IMG_20240504_195603.jpg';
import img2024_5 from '../assest/2024/IMG-20240416-WA0001.jpg';
import img2024_6 from '../assest/2024/IMG-20240815-WA0025.jpg';
import img2024_7 from '../assest/2024/IMG20240725133138.jpg';
import img2024_8 from '../assest/2024/IMG_20240731_224311.jpg';
import img2024_9 from '../assest/2024/Screenshot_2024-06-16-21-10-50-41_99c04817c0de5652397fc8b56c3b3817.jpg';
import img2024_10 from '../assest/2024/ssnaps_21DAAD2160FE2C0E22FCD1A0942BDC78.jpg';
import img2024_11 from '../assest/2024/ssnaps_D9389628DAAC27D33939B31503FE3E08.jpg';
import img2024_12 from '../assest/2024/IMG-20240813-WA0008.jpg';
import img2024_13 from '../assest/2024/IMG20240719064800.jpg';
import img2024_14 from '../assest/2024/IMG-20240813-WA0004.jpg';
import img2024_15 from '../assest/2024/IMG20240725133431.jpg';
import img2024_16 from '../assest/2024/IMG20240725133829.jpg';
import img2024_17 from '../assest/2024/IMG20240606124931.jpg';
import img2024_18 from '../assest/2024/Snapchat-1262115618.jpg';
import img2024_19 from '../assest/2024/IMG20240424115004.jpg';
import img2024_20 from '../assest/2024/IMG20240414173343.jpg';
import img2024_21 from '../assest/2024/IMG-20240214-WA0011.jpg';
import img2024_22 from '../assest/2024/IMG-20240214-WA0005.jpg';
import img2024_23 from '../assest/2024/IMG-20231121-WA0014.jpg';
import img2024_24 from '../assest/2024/IMG_20231205_141309_925.jpg';

// 2025
import img2025_1 from '../assest/2025/IMG-20250721-WA0018.jpg';
import img2025_2 from '../assest/2025/IMG-20250721-WA0020.jpg';
import img2025_3 from '../assest/2025/IMG-20250721-WA0019.jpg';
import img2025_4 from '../assest/2025/IMG-20250721-WA0012.jpg';
import img2025_5 from '../assest/2025/IMG-20250721-WA0029.jpg';
import img2025_6 from '../assest/2025/IMG-20250721-WA0028.jpg';
import img2025_7 from '../assest/2025/IMG-20250721-WA0027.jpg';
import img2025_8 from '../assest/2025/IMG-20250721-WA0026.jpg';
import img2025_9 from '../assest/2025/IMG-20250721-WA0025.jpg';
import img2025_10 from '../assest/2025/IMG-20250721-WA0024.jpg';
import img2025_11 from '../assest/2025/IMG-20250721-WA0023.jpg';
import img2025_12 from '../assest/2025/IMG-20250721-WA0017.jpg';
import img2025_13 from '../assest/2025/IMG-20250721-WA0016.jpg';
import img2025_14 from '../assest/2025/IMG-20250721-WA0015.jpg';
import img2025_15 from '../assest/2025/IMG-20250721-WA0013.jpg';
import img2025_16 from '../assest/2025/IMG-20250721-WA0014.jpg';
import img2025_17 from '../assest/2025/IMG-20250721-WA0011.jpg';
import img2025_18 from '../assest/2025/IMG-20250721-WA0010.jpg';
import img2025_19 from '../assest/2025/IMG-20240818-WA0090.jpg';


const yearImages = {
  '2023': [img2023_1, img2023_2, img2023_3, img2023_4, img2023_5, img2023_6, img2023_7, img2023_8, img2023_9, img2023_10, img2023_11, img2023_12, img2023_13, img2023_14, img2023_15, img2023_16, img2023_17, img2023_18, img2023_19, img2023_20, img2023_21],
  '2024': [img2024_1, img2024_2, img2024_3, img2024_4, img2024_5, img2024_6, img2024_7, img2024_8, img2024_9, img2024_10, img2024_11, img2024_12, img2024_13, img2024_14, img2024_15, img2024_16, img2024_17, img2024_18, img2024_19, img2024_20, img2024_21, img2024_22, img2024_23, img2024_24],
  '2025': [img2025_1, img2025_2, img2025_3, img2025_4, img2025_5, img2025_6, img2025_7, img2025_8, img2025_9, img2025_10, img2025_11, img2025_12, img2025_13, img2025_14, img2025_15, img2025_16, img2025_17, img2025_18, img2025_19],
};

const FloatingImages = ({ year }) => {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);
  const images = yearImages[year] || [];

  useEffect(() => {
    const generatePositions = (width, height) => {
      if (!width || !height || images.length === 0) return;

      const numImages = images.length;
      const gridCols = Math.ceil(Math.sqrt(numImages));
      const gridRows = Math.ceil(numImages / gridCols);
      const cellWidth = width / gridCols;
      const cellHeight = height / gridRows;

      const newPositions = images.map((_, i) => {
        const row = Math.floor(i / gridCols);
        const col = i % gridCols;

        const baseX = col * cellWidth + cellWidth / 2;
        const baseY = row * cellHeight + cellHeight / 2;

        const jitterX = (Math.random() - 0.5) * cellWidth * 0.7;
        const jitterY = (Math.random() - 0.5) * cellHeight * 0.7;

        return {
          left: baseX + jitterX,
          top: baseY + jitterY,
          size: Math.random() * 8 + 6,
          duration: Math.random() * 15 + 15,
          delay: Math.random() * 5,
        };
      });
      setPositions(newPositions);
    };
    
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        generatePositions(entry.contentRect.width, entry.target.scrollHeight);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [images]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full shadow-lg"
          style={{
            width: `${pos.size}rem`,
            height: `${pos.size}rem`,
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0, rotate: Math.random() * 360 - 180 }}
          animate={{
            scale: 1,
            opacity: 0.8,
            y: [pos.top, pos.top + (Math.random() * 40 - 20)],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 0.8, delay: pos.delay, ease: 'easeOut' },
            opacity: { duration: 0.8, delay: pos.delay, ease: 'easeOut' },
            y: {
              duration: pos.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
            rotate: {
              duration: pos.duration * 2,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          <img
            src={images[i]}
            alt={`Memory ${year} ${i + 1}`}
            className="w-full h-full object-cover rounded-full border-2 border-white/40 shadow-xl"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingImages;