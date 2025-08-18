import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile_main from "../assets/profile_main.jpg";
import profile2 from "../assets/profile2.jpg";
import pic1 from "../assets/pic1.jpg";

const images = [profile2, profile_main, pic1];

export default function CarouselSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onImageClick = (index) => {
    setModalImage(images[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const getPositionClass = (index) => {
    if (index === activeImage) return "z-20 scale-100";
    if ((index + 1) % images.length === activeImage) return "z-10 translate-x-10 scale-90 opacity-70";
    if ((index + 2) % images.length === activeImage) return "z-0 -translate-x-10 scale-90 opacity-70";
    return "opacity-0 pointer-events-none";
  };

  return (
    <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80 xl:h-70 flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full">
        {images.map((img, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`absolute w-44 h-56 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-in-out hover:scale-105 ${getPositionClass(index)}`}
        onClick={() => onImageClick(index)}
      >
        <img
          src={img}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
))}

      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && modalImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-sm bg-black/30"
            onClick={closeModal}
          >
            <motion.div
              key="image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-[-30px] right-[-30px] bg-white/80 text-black px-2 py-1 rounded-full text-lg hover:bg-white transition"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={modalImage}
                alt="Modal Preview"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
