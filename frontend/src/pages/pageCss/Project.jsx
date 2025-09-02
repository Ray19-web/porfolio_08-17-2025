import React, { useEffect } from 'react';
import { FaReact, FaGithub, FaSketch, FaFigma } from 'react-icons/fa';
import { Link } from 'react-router'; // Updated Link import for navigation
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Project() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // animation happens only once when it comes into view
    });
  }, []);

  return (
    <div id="projects" className="font-google-sans-code lg:m-10 md:m-10 rounded-2xl bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        {/* Main Header */}
        <h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          Projects
        </h2>

        {/* Frontend Projects Section */}
        <section className="mt-16">
          <h3
            className="text-3xl font-semibold text-gray-800 dark:text-white"
            data-aos="fade-up"
          >
            Frontend Development Projects
          </h3>
          <p
            className="text-left text-gray-600 dark:text-gray-400 mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore my frontend projects built with React, Next.js, and other modern web technologies, designed with responsive layouts.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {/* Project 1 */}
            <Link
              to="/projects/portfolio"
              className="relative group rounded-3xl bg-white dark:bg-gray-800 transition-colors duration-300 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10 group-hover:bg-opacity-60 transition-all"><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s"  // Relative path from the public folder
                alt="Project 1"
                className="w-full h-56 object-cover rounded-3xl group-hover:blur-sm transition-all"
                /></div>
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white group-hover:text-yellow-300 transition-all">
                <h4 className="text-xl font-semibold">Portfolio Website</h4>
                <p className="mt-4 text-sm">A personal portfolio built using React and styled with Tailwind CSS. Fully responsive with smooth scrolling and animations.</p>
                <div className="flex mt-4 space-x-4">
                  <FaReact className="text-sky-500 text-xl" />
                  <FaGithub className="text-gray-800 dark:text-white text-xl" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl mt-6">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Portfolio"
                  className="w-full h-56 object-cover rounded-3xl group-hover:blur-sm transition-all"
                />
              </div>
            </Link>

            {/* Project 2 */}
            <Link
              to="/projects/e-commerce"
              className="relative group rounded-3xl bg-white dark:bg-gray-800 transition-colors duration-300 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10 group-hover:bg-opacity-60 transition-all"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white group-hover:text-yellow-300 transition-all">
                <h4 className="text-xl font-semibold">E-commerce App</h4>
                <p className="mt-4 text-sm">A dynamic e-commerce platform with React and Firebase, featuring product listings, authentication, and cart management.</p>
                <div className="flex mt-4 space-x-4">
                  <FaReact className="text-sky-500 text-xl" />
                  <FaGithub className="text-gray-800 dark:text-white text-xl" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl mt-6">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="E-commerce"
                  className="w-full h-56 object-cover rounded-3xl group-hover:blur-sm transition-all"
                />
              </div>
            </Link>

            {/* Project 3 */}
            <Link
              to="/projects/task-manager"
              className="relative group rounded-3xl bg-white dark:bg-gray-800 transition-colors duration-300 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10 group-hover:bg-opacity-60 transition-all"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white group-hover:text-yellow-300 transition-all">
                <h4 className="text-xl font-semibold">Task Manager App</h4>
                <p className="mt-4 text-sm">A task manager built with React, Node.js, and MongoDB, allowing users to organize tasks and track deadlines.</p>
                <div className="flex mt-4 space-x-4">
                  <FaReact className="text-sky-500 text-xl" />
                  <FaGithub className="text-gray-800 dark:text-white text-xl" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl mt-6">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Task Manager"
                  className="w-full h-56 object-cover rounded-3xl group-hover:blur-sm transition-all"
                />
              </div>
            </Link>
          </div>
        </section>

        {/* Graphic Design Projects Section */}
        <section className="mt-24">
          <h3
            className="text-3xl font-semibold text-gray-800 dark:text-white"
            data-aos="fade-up"
          >
            Graphic Design Projects
          </h3>
          <p
            className="text-left text-gray-600 dark:text-gray-400 mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Creative graphic design projects, including branding, UI design, and more. Showcasing my skills in digital art.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {/* Design Project 1 */}
            <Link
              to="/projects/branding-logo"
              className="relative group rounded-3xl bg-white dark:bg-gray-800 transition-colors duration-300 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10 group-hover:bg-opacity-60 transition-all"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white group-hover:text-yellow-300 transition-all">
                <h4 className="text-xl font-semibold">Branding & Logo Design</h4>
                <p className="mt-4 text-sm">Designed modern logos and brand identities for startups using Figma and Adobe Illustrator.</p>
                <div className="flex mt-4 space-x-4">
                  <FaSketch className="text-gray-800 dark:text-white text-xl" />
                  <FaFigma className="text-fuchsia-500 text-xl" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl mt-6">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Branding"
                  className="w-full h-56 object-cover rounded-3xl group-hover:blur-sm transition-all"
                />
              </div>
            </Link>

            {/* Design Project 2 */}
            <Link
              to="/projects/ui-ux"
              className="relative group rounded-3xl bg-white dark:bg-gray-800 transition-colors duration-300 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10 group-hover:bg-opacity-60 transition-all"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white group-hover:text-yellow-300 transition-all">
                <h4 className="text-xl font-semibold">UI/UX Design</h4>
                <p className="mt-4 text-sm">Created wireframes and high-fidelity designs for mobile apps with a focus on user experience.</p>
                <div className="flex mt-4 space-x-4">
                  <FaFigma className="text-fuchsia-500 text-xl" />
                  <FaSketch className="text-gray-800 dark:text-white text-xl" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl mt-6">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="UI/UX Design"
                  className="w-full h-56 object-cover rounded-3xl group-hover:blur-sm transition-all"
                />
              </div>
            </Link>

            {/* Design Project 3 */}
            <Link
              to="/projects/social-media-graphics"
              className="relative group rounded-3xl bg-white dark:bg-gray-800 transition-colors duration-300 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10 group-hover:bg-opacity-60 transition-all"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white group-hover:text-yellow-300 transition-all">
                <h4 className="text-xl font-semibold">Social Media Graphics</h4>
                <p className="mt-4 text-sm">A collection of custom graphics designed for social media engagement and brand visibility.</p>
                <div className="flex mt-4 space-x-4">
                  <FaFigma className="text-fuchsia-500 text-xl" />
                  <FaSketch className="text-gray-800 dark:text-white text-xl" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl mt-6">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Social Media"
                  className="w-full h-56 object-cover rounded-3xl group-hover:blur-sm transition-all"
                />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
