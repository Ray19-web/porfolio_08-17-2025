import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import profile from "../assets/profile_main.jpg";

const iconVariants = {
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

const AboutPage = () => {
  return (
    <div className="flex-grow bg-base-200 mx-4 sm:mx-6 md:mx-12 flex items-center justify-center px-4 py-12 text-center rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:mx-10 bg-base-100 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-md backdrop-blur-md"
      >
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.img
            src={profile}
            alt="Raymund Gorres"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-sky-400 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <h1 className="font-google-sans-code text-2xl md:text-4xl font-bold mb-4 text-sky-500">
              <span className="text-sky-500 ">&lt;</span> Raymund O. Gorres{" "}
              <span className="text-sky-500">/&gt;</span>
            </h1>
            <hr className="text-base-300 border-3 my-10" />
            <p className="font-google-sans-code text-base md:text-lg text-black text-justify leading-relaxed">
              Hey! I’m a frontend developer and aspiring designer, currently a second-year student at the University of Science and Technology of Southern Philippines (USTP) - Jasaan Campus. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and focus on building sleek, user-friendly web apps and interfaces.
<br /><br />Along with development, I’m exploring graphic design—logo creation, t-shirt branding, and more. While I’m still learning, I’m driven to grow and push my limits with every challenge.

Outside of coding, you can find me drawing or playing online games, which fuel my creativity. Whenever I have an idea, I dive into coding to bring it to life.
<br /><br />
Let’s connect if you're interested in collaborating or just chatting about tech, design, or anything creative!
            </p>
          </div>
        </div>

        {/* Developer Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 text-sm text-white/70"
        >
          <p className="font-google-sans-code flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm md:text-base lg:text-lg font-medium text-gray-800">
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full shadow-sm hover:bg-sky-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              📍 Philippines
            </span>
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full shadow-sm hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              🎓 2nd Year BSIT Student
            </span>
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full shadow-sm hover:bg-yellow-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              💡 Knowledge Seeker
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
