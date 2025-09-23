'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log('Download CV');
  };

  const handleContactMe = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
              {/* Animated Background */}
              <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100'}`}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-32 h-32 mb-8"
            >
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
              C
            </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <p className={`text-sm tracking-widest font-semibold ${theme === 'dark' ? 'text-blue-300/80' : 'text-blue-700'}`}>
                Hello! I'm Web Developer
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">ReactJS</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300">NextJS</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300">Full Stack Developer</span>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Build Modern Web
                <br />
                Solutions
              </h1>
            </div>

            {/* Intro paragraph */}
            <p className={`max-w-2xl text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              As a Web Developer with nearly 3 years of experience, I specialize in building
              responsive, high‑performance web applications using ReactJS/NextJS on the frontend
              and Node.js/NestJS or PHP on the backend. I focus on clean code, accessibility,
              and great user experience to deliver scalable web solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className={`flex items-center space-x-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <Mail size={20} />
                <span className="text-base">cvminhquan@gmail.com</span>
              </div>
              <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                District 4, Ho Chi Minh City
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
              <button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg"
              >
                <Download size={20} />
                <span>View My CV</span>
              </button>
              <button
                onClick={handleContactMe}
                className={`border-2 px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-lg ${
                  theme === 'dark'
                    ? 'border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white'
                    : 'border-gray-300 hover:border-blue-500 text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right Content - Feature Post */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className={`backdrop-blur-sm rounded-3xl p-10 border shadow-2xl ${
              theme === 'dark'
                ? 'bg-gray-800/60 border-gray-700'
                : 'bg-white/60 border-gray-300'
            }`}>
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-xl">
                  C
                </div>
                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Chau Vu Minh Quan</h3>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Web Developer</p>
                <div className={`space-y-3 text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  <p>cvminhquan@gmail.com</p>
                  <p>District 4, Ho Chi Minh City</p>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-200">
                    View My CV
                  </button>
                  <button className={`flex-1 border px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white'
                      : 'border-gray-300 hover:border-blue-500 text-gray-600 hover:text-gray-900'
                  }`}>
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            theme === 'dark' ? 'border-gray-400' : 'border-gray-500'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
