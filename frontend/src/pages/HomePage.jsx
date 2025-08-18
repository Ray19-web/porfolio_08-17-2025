import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // For scroll detection
import Navbar from "../components/Navbar";
import CarouselSection from "../components/CarouselSection";
import MusicLyricsSection from "../components/MusicLyricsSection";
import CareerStatus from "../components/CareerStatus";
import HeroRight from "../components/ContentOne";
import Footer from "../components/Footer";
import AboutPage from "./AboutPage";

// Basic page fade-in animation
const pageVariants = {
  initial: { opacity: 0, y: 40 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -40 },
};

// Scroll-triggered fade-in animation for each section
const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  in: { opacity: 1, y: 0 },
};

function HomePage() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true, // Only trigger once when it's in view
    threshold: 0.2, // Trigger animation when 20% is in view
  });

  const { ref: carouselRef, inView: carouselInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: lyricsRef, inView: lyricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: careerRef, inView: careerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-base-300 overflow-visible"
    >
      <Navbar />

      <main id="home" className="mt-20 flex flex-col md:flex-row w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-10 gap-6 md:gap-12 overflow-x-hidden">
        
        <motion.section
          ref={heroRef}
          variants={sectionVariants}
          initial="initial"
          animate={heroInView ? "in" : "initial"}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-full bg-base-200 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center text-center"
        >
          <div className="w-full">
            <HeroRight />
          </div>
        </motion.section>

        <motion.section
          ref={carouselRef}
          variants={sectionVariants}
          initial="initial"
          animate={carouselInView ? "in" : "initial"}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col bg-base-200 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 gap-6 min-w-0"
        >
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 flex-grow min-w-0">
            <motion.div
              variants={sectionVariants}
              initial="initial"
              animate={carouselInView ? "in" : "initial"}
              transition={{ duration: 0.8 }}
              className="flex-1 relative bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md"
            >
              <CarouselSection />
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="initial"
              animate={carouselInView ? "in" : "initial"}
              transition={{ duration: 0.8 }}
              className="flex-1 rounded-2xl shadow-md overflow-hidden min-w-0"
            >
              <MusicLyricsSection />
            </motion.div>
          </div>
          <motion.div
            ref={careerRef}
            variants={sectionVariants}
            initial="initial"
            animate={careerInView ? "in" : "initial"}
            transition={{ duration: 0.8 }}
            className="mt-auto min-w-0"
          >
            <CareerStatus />
          </motion.div>
        </motion.section>
      </main>

      <hr className="mx-auto w-3/4 max-w-xl border-2 border-gray-300 opacity-30" />

      <motion.h1
        ref={aboutRef}
        variants={sectionVariants}
        initial="initial"
        animate={aboutInView ? "in" : "initial"}
        transition={{ duration: 0.8 }}
        id="about"
        className="font-google-sans-code text-center text-4xl sm:text-5xl md:text-6xl font-extrabold my-12 text-gray-900 dark:text-gray-100"
      >
        About Me
      </motion.h1>

      <motion.div
        ref={aboutRef}
        variants={sectionVariants}
        initial="initial"
        animate={aboutInView ? "in" : "initial"}
        transition={{ duration: 0.8 }}
      >
        <AboutPage />
      </motion.div>

      <Footer />
    </motion.div>
  );
}

export default HomePage;
