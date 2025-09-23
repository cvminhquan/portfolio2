"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Download, Github, Globe, Linkedin, Mail } from "lucide-react";

const Sidebar = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

  const handleDownloadCV = () => {
    console.log("Download CV");
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/cvminhquan/",
      icon: Linkedin,
    },
    { label: "GitHub", href: "https://github.com/cvminhquan", icon: Github },
    { label: "Portfolio", href: "https://cvminhquan.com", icon: Globe },
    { label: "Email", href: "mailto:cvminhquan@gmail.com", icon: Mail },
  ];

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`md:fixed relative left-0 top-20 md:top-0 h-full w-full md:w-96 border-r z-40 overflow-y-auto hidden lg:block ${className} ${
        theme === "dark" ? "" : "bg-gray-100 border-gray-200"
      }`}
    >
      <div className="md:p-8 h-full flex justify-center items-center flex-col">
        <div className="bg-[linear-gradient(123.51deg,rgba(215,237,237,0.1)_-61.8%,rgba(204,235,235,0.01))] p-8 rounded-[20px] border-t-[hsla(0,0%,100%,0.1)] border-t border-solid text-center space-y-8">
          {/* Profile Section */}
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-32 h-32 mx-auto mb-6"
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              C
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-lg"></div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <h1
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Chau Vu Minh Quan
            </h1>
            <h2 className="text-lg font-semibold text-green-400">
              WEB DEVELOPER
            </h2>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <a
              className={`flex items-center justify-center space-x-3 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
              href="mailto:cvminhquan@gmail.com"
            >
              <Mail size={18} />
              <span className="text-sm underline">cvminhquan@gmail.com</span>
            </a>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              District 4, Ho Chi Minh City
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex justify-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                      : "bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="space-y-4"
          >
            <button
              onClick={handleDownloadCV}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              }`}
            >
              <Download size={18} />
              <span>View My CV</span>
            </button>
            <button
              onClick={handleContactMe}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
