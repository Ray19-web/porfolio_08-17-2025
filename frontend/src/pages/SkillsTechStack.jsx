import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './pageCss/SkillsTechStack.css'; // Your custom CSS

const techIcons = [
  { name: 'Canva', icon: 'https://oit.caes.uga.edu/files/2023/03/avnac.jpg' },
  { name: 'Photoshop', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3Y9wtDBk52VMs-_K6EVUDn8GKooJriOMNw&s' },
  { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png' },
  { name: 'HTML', icon: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png' },
  { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
  { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png' },
  { name: 'Tailwind CSS', icon: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png' },
  { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
  { name: 'Express', icon: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png' },
  { name: 'Vite', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png' },
  { name: 'VSCode', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' },
  { name: 'NetBeans', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/800px-Apache_NetBeans_Logo.svg.png' },
  { name: 'Postman', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-3628992-3030217.png?f=webp' },
];

function SkillsTechStack() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="skills"
      className="y-16 my-20 text-gray-900 px-4 sm:px-6 md:px-8 lg:px-12"
      data-aos="fade-up"
    >
      <h2 className="font-google-sans-code text-4xl sm:text-5xl font-bold text-center mb-12">
        My <span className="text-sky-500">Tech Stack</span>
      </h2>

      <div
        className="bg-base-200 py-10 rounded-2xl px-10 relative overflow-hidden"
        data-aos="zoom-in-up"
      >
        <div className="tech-slider-mask">
          <div className="tech-slider-track">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div
                key={index}
                className="tech-icon"
                title={tech.name}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsTechStack;
