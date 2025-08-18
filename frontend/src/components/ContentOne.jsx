import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Star,
  ScanFace,
  FileBadge,
} from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const featuredItems = [
  {
    title: 'Creative Landing Page',
    image: 'https://via.placeholder.com/600x400?text=Project+1',
    description: 'A bold, modern UI concept for a marketing website.',
    time: '10:30 AM',
    date: 'July 28, 2025',
    link: 'https://example.com/project-1',
  },
  {
    title: 'Mobile App UI Kit',
    image: 'https://via.placeholder.com/600x400?text=Project+2',
    description: 'A sleek mobile UI for health tracking.',
    time: '3:15 PM',
    date: 'July 30, 2025',
    link: 'https://example.com/project-2',
  },
  {
    title: 'E‑commerce Dashboard',
    image: 'https://via.placeholder.com/600x400?text=Project+3',
    description: 'Responsive admin panel for product management.',
    time: '8:00 AM',
    date: 'July 31, 2025',
    link: 'https://example.com/project-3',
  },
];

const autoplayInterval = 5000;
const typingSpeed = 120;
const pauseTime = 2000;

const HeroLeft = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const direction = useRef(0);
  const [displayText, setDisplayText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const fullText = 'Raymund Ochigue Gorres';

  const floatControls = useAnimation();

  useEffect(() => {
    floatControls.start({
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [floatControls]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && typingIndex < fullText.length) {
        setDisplayText(fullText.slice(0, typingIndex + 1));
        setTypingIndex((prev) => prev + 1);
      } else if (!deleting && typingIndex === fullText.length) {
        setDeleting(true);
      } else if (deleting && typingIndex > 0) {
        setDisplayText(fullText.slice(0, typingIndex - 1));
        setTypingIndex((prev) => prev - 1);
      } else if (deleting && typingIndex === 0) {
        setDeleting(false);
      }
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [typingIndex, deleting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    direction.current = newDirection;
    setCurrentIndex((prev) => (prev + newDirection + featuredItems.length) % featuredItems.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
  };

  const currentItem = featuredItems[currentIndex];

  return (
    <section>
      <div className="card rounded-xl max-w-5xl w-full flex flex-col gap-4">
        {/* Header */}
        <div className="relative flex flex-col items-start text-left bg-white p-8 border-t-10 border-blue-500 rounded-lg overflow-hidden shadow-md">
          <motion.div
            animate={floatControls}
            className="absolute top-4 left-4 bg-white shadow-md p-2 rounded-full z-10"
          >
            <ScanFace size={50} className="text-sky-500" />
          </motion.div>

          <h1 className="font-google-sans-code text-4xl font-bold text-gray-900 leading-none mb-5 w-full text-center min-h-[48px]">
            {displayText}
            <span className="text-blue-600 animate-pulse">|</span>
          </h1>

          <h2 className="font-google-sans-code text-xl sm:text-2xl text-gray-600 mb-6 text-center w-full border-t-2 pt-4">
            <b>Aspiring</b> (Graphic Designer & Front‑End Developer)
          </h2>

          <p className="font-google-sans-code text-gray-700 text-base sm:text-lg max-w-xl w-full text-center">
            <i>"I craft clean, modern designs and user‑friendly websites — from bold logos to responsive UIs."</i>
          </p>
        </div>

        {/* Featured Section */}
        <div className="font-google-sans-code relative w-full shadow-md rounded-3xl">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition z-10"
            aria-label="Previous item"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-5 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition z-10"
            aria-label="Next item"
          >
            <ArrowRight size={24} />
          </button>

          <div className="p-5 bg-white rounded-lg">
            <div className="flex items-center gap-2 mb-4 w-full">
              <FileBadge className="text-yellow-500 size-8" />
              <span className="text-lg font-bold text-gray-800">Featured</span>
            </div>
            

            <div className="w-full rounded-xl overflow-hidden shadow-md relative h-[246px]">
              <AnimatePresence initial={false} custom={direction.current}>
                <motion.a
                  href={currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={currentIndex}
                  custom={direction.current}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full h-full block"
                >
                  {/* Image */}
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Always-visible Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">{currentItem.title}</h3>
                    <p className="text-white text-sm mb-3">{currentItem.description}</p>
                    <div className="flex gap-4 text-gray-200 text-sm">
                      <span className="flex items-center gap-1">
                        <Clock size={16} /> {currentItem.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={16} /> {currentItem.date}
                      </span>
                    </div>
                  </div>
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLeft;
