"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`lg:ml-96 min-h-screen ${theme === "dark" ? "" : "bg-white"}`}
    >
      <Header />
      {/* Main Content */}
      <main className="pt-16 w-full lg:max-w-[1200px] mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </main>

      {/* Right Sidebar Utilities */}
      {/* <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <div className="flex flex-col space-y-3">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
              theme === "dark"
                ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300"
            }`}
          >
            <img src="/assets/icons/grid.svg" alt="Grid" className="w-5 h-5" />
          </div>
          <button
            onClick={toggleTheme}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
              theme === "dark"
                ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300"
            }`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <img
              src={
                theme === "dark"
                  ? "/assets/icons/sun.svg"
                  : "/assets/icons/moon.svg"
              }
              alt={theme === "dark" ? "Sun" : "Moon"}
              className="w-5 h-5"
            />
          </button>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
              theme === "dark"
                ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300"
            }`}
          >
            <Settings size={20} />
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default MainLayout;
