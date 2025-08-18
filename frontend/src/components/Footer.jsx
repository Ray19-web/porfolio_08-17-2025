import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer
      className={` font-google-sans-code transition-all duration-700 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } bg-gradient-to-t from-base-300 to-base-100 text-center py-6 mt-10`}
    >
      <div className="flex flex-col items-center gap-1 text-sm text-neutral-content">
        <p className="hover:text-primary transition-colors duration-300">
          Design & Build by <span className="font-semibold">Raymund Gorres</span>
        </p>
        <p className="text-xs opacity-80">© 2025, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
