import React, { useEffect, useState } from 'react';
import bgVideo from '../assets/Data_Grid.mp4';
import profileImage from '../assets/profile_main.jpg'; // replace with your actual image

export default function IntroSplash({ onFinish }) {
  const [showText, setShowText] = useState(false);
  const [applyBlur, setApplyBlur] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowText(true);
      setApplyBlur(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    const timer3 = setTimeout(() => {
      setHideSplash(true);
      if (onFinish) onFinish();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (hideSplash) return null;

  return (
    <>
      {/* Animation styles */}
      <style>{`
        @layer utilities {
          .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s ease-out forwards;
          }

          .fade-out {
            animation: fadeOut 0.6s ease-out forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        }
      `}</style>

      <div className={`fixed inset-0 z-50 flex items-center justify-center ${fadeOut ? 'fade-out' : ''}`}>
        {/* Background Video */}
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            filter: applyBlur ? 'blur(8px)' : 'none',
            transform: 'scale(1.05)',
            transition: 'filter 0.6s ease',
          }}
        />

        {/* Overlay Content */}
        {showText && (
          <div className="z-10 flex flex-col md:flex-row items-center gap-6 px-6 py-8 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl fade-in-up">
            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Raymund O. Gorres"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow-md"
            />

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="font-google-sans-code text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow border-b-2 pb-5">
                &lt; Raymund O. Gorres /&gt;
              </h1>
              <p className="font-google-sans-code text-lg md:text-2xl text-sky-300 font-medium tracking-wide w-full text-center">
                PORTFOLIO
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
