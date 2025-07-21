import React from 'react';
import { motion } from 'framer-motion';

const TimelineSection = ({ year }) => {
  // Timeline data for each year
  const timelineData = {
    '2023': [
  {
    date: "Nov 2022",
    title: "First Saw You in College",
    description: "The moment I saw you, my heart skipped a beat",
    emoji: "💘"
  },
  {
    date: "Early Dec 2022",
    title: "Confessed My Feelings",
    description: "After nights of talking, I poured my heart out to you",
    emoji: "💌"
  },
  {
    date: "Jun 5, 2023",
    title: "You Proposed!",
    description: "The happiest day when you accepted my love",
    emoji: "🥰"
  },
  {
    date: "Summer 2023",
    title: "Our First Summer Together",
    description: "Every day with you felt like a beautiful dream",
    emoji: "🌻"
  },
],
    '2024': [
      {
        date: "Feb 14",
        title: "Valentine's Surprise",
        description: "A romantic movie date with you",
        emoji: "💖"
      },
      {
        date: "May 30",
        title: "Homecoming",
        description: "Travelling with you ",
        emoji: "🚌"
      },
      {
        date: "June 12",
        title: "You in my home ",
        description: "i invited you in my home 2 times give you a ride on my scooty for the first time ",
        emoji: "🏠"
      }
    ]
  };

  return (
    <div className="w-full backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-500/30 p-6 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-300 mb-8">
        Our Journey in {year}
      </h2>
      
      <div className="space-y-10">
        {timelineData[year]?.map((event, index) => (
          <motion.div
            key={index}
            className="relative pl-10 border-l-4 border-pink-500/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xl">
              {event.emoji}
            </div>
            <div className="mb-2 text-xl text-pink-400 font-semibold">{event.date}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{event.title}</h3>
            <p className="text-xl text-purple-100">{event.description}</p>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default TimelineSection;