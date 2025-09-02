import React, { useEffect } from 'react';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'; // You can use Lucid icons if you prefer
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations

function Experience() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once (default is false)
    });
  }, []);

  return (
    <div id="experience" className="lg:mx-10 md:mx-5 mx-4 rounded-2xl font-google-sans-code bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <h1
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
          data-aos="fade-up" // Scroll animation on title
        >   
          My Experience
        </h1>
        <p
          className="text-center text-gray-600 dark:text-gray-400 mt-2"
          data-aos="fade-up" // Scroll animation on paragraph
          data-aos-delay="100" // Delay to stagger with title
        >
          Although I don't have formal job experience, I'm continuously building and learning by working on exciting projects.
        </p>
      </div>
    </div>
  );
}

export default Experience;
