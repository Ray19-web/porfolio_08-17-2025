// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/RAY LOGO.png";
import profile_main from "../assets/profile_main.jpg";
import {
  House,
  User,
  Settings,
  Mail,
  UserPen,
  Briefcase,
  MapPin,
  AlignJustify,
  FileDown,
} from "lucide-react";

import ContactModal from "./contact/ContactModal";  // Import here

const menuItems = [
  { label: "Home", icon: House, path: "home" },
  { label: "About Me", icon: User, path: "about" },
  { label: "Skills/Tech Stack", icon: Settings, path: "skills" },
  { label: "Experience", icon: Briefcase, path: "experience" },
  { label: "Project Section", icon: Mail, path: "projects" },
  { label: "User Journey", icon: MapPin, path: "journey" },
];

function Navbar() {
  const [showContact, setShowContact] = useState(false);

  const handleScrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile drawer if open
    const drawerCheckbox = document.getElementById("mobile-drawer");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="font-google-sans-code drawer">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 md:px-8 py-2 flex items-center justify-between h-20">

          {/* Left side: Hamburger + Logo */}
          <div className="flex items-center">
            {/* Hamburger (Mobile) */}
            <label
              htmlFor="mobile-drawer"
              className="btn btn-ghost btn-sm md:hidden p-1"
            >
              <AlignJustify className="w-5 h-5 text-gray-700" />
            </label>
            {/* Logo */}
            <a href="#home" onClick={handleScrollToSection("home")} className="ml-3 md:ml-6 cursor-pointer">
              <img src={logo} alt="Logo" className="w-36 h-auto" />
            </a>
          </div>

          {/* Center (Desktop): Navigation */}
          <ul className="hidden md:flex flex-1 justify-center space-x-6">
            {menuItems.map(({ label, icon: Icon, path }, index) => (
              <li key={index}>
                <button
                  onClick={handleScrollToSection(path)}
                  className="flex flex-col items-center text-sm px-3 py-1 rounded-md transition-all duration-300 text-gray-700 hover:outline hover:outline-2 hover:outline-blue-500 hover:outline-offset-2 hover:text-blue-600 cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Contact Button (Both Mobile and Desktop) */}
          <div className="absolute right-4 md:static mr-8">
            <button
              onClick={() => setShowContact(true)}
              className="text-black border-blue-500 border-2 px-4 py-2 rounded-md shadow 
                        text-sm md:text-base flex gap-2 items-center
                        transition-all duration-300 ease-in-out
                        hover:text-white hover:bg-blue-600 
                        hover:shadow-lg hover:shadow-blue-500/50 
                        animate-pulse"
            >
              <UserPen />
              Contact Me
            </button>
          </div>
        </nav>
      </div>

      {/* Drawer Sidebar (Mobile) */}
      <div className="drawer-side z-60">
        <label htmlFor="mobile-drawer" className="drawer-overlay bg-black/30"></label>
        <div className="menu bg-base-100 text-base-content min-h-full w-64 p-4 pt-10 space-y-4 rounded-tr-2xl rounded-br-2xl flex flex-col justify-between">
          <div>
            <div className="text-center p-4 border-b mb-6">
              <img
                src={profile_main}
                alt="Your Profile"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h2 className="text-xl font-semibold">Raymund O. Gorres</h2>
              <p className="text-sm text-gray-500 mb-3">
                Front-End Web Developer
              </p>
              <a
                href="https://www.canva.com/design/DAGqnHqpcvc/n6O0XMKrw6h9KUpZSD350A/edit?utm_content=DAGqnHqpcvc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out mt-6 w-full flex items-center justify-center gap-2 bg-blue-500 py-3 text-white rounded-4xl shadow-md hover:bg-white hover:border hover:border-blue-500 hover:text-black"
              >
                <FileDown className="size-5" />
                Download Resume
              </a>
            </div>

            {menuItems.map(({ label, icon: Icon, path }, index) => (
              <li key={index}>
                <button
                  onClick={handleScrollToSection(path)}
                  className="flex items-center gap-4 text-base px-3 py-2 rounded-4xl transition-all duration-300 cursor-pointer mt-1 hover:bg-blue-100 hover:text-blue-600 w-full text-left"
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </button>
              </li>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-400 border-t pt-4">
            <p>Design & Build by Raymund Gorres</p>
            <p>© 2025, All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}

export default Navbar;
