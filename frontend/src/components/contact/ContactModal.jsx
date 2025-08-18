// src/components/ContactModal.jsx
import React, { useState } from "react";
import {
  X,
  Facebook,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  User,
  Mail,
  Send,
  Smartphone,
} from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "WhatsApp", icon: Smartphone, url: "https://wa.me/1234567890" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
];

function ContactModal({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setShowSuccess(false);
      setFormData({ name: "", email: "", message: "" });
    }, 300);
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
    handleClose();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send form data to backend or email service
    setShowSuccess(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`bg-white w-[90%] max-w-md p-8 rounded-3xl shadow-2xl transform transition-all duration-300
            ${isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100 animate-fade-in"}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600 tracking-wide">Get in Touch</h2>
            <button onClick={handleClose} aria-label="Close">
              <X className="w-7 h-7 text-gray-600 hover:text-red-500 transition" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <button
                key={name}
                onClick={() => handleSocialClick(url)}
                aria-label={name}
                className="p-3 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-100 transition shadow-md hover:shadow-lg"
              >
                <Icon className="w-6 h-6 text-blue-600" />
              </button>
            ))}
          </div>

          {/* Or Text */}
          <div className="text-center text-gray-500 font-semibold mb-6">-------------- OR through <span className="text-blue-500">Gmail</span> --------------</div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 shadow-lg shadow-blue-500/40 transition"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in-up z-[1000]">
          Message sent successfully!
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease forwards;
        }
      `}</style>
    </>
  );
}

export default ContactModal;
