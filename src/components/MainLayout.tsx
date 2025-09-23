'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { FileText, FolderOpen, PenTool, Search, Send, Settings } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { theme, toggleTheme } = useTheme();
  
  const headerIcons = [
    { icon: Search, label: 'Search' },
    { icon: FileText, label: 'Documents' },
    { icon: Settings, label: 'Settings' },
    { icon: FolderOpen, label: 'Projects' },
    { icon: PenTool, label: 'Edit' },
    { icon: Send, label: 'Send' },
  ];

  return (
    <div className={`lg:ml-80 min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 right-0 left-0 lg:left-80 backdrop-blur-md border-b z-30 ${
          theme === 'dark' 
            ? 'bg-gray-900/95 border-gray-800' 
            : 'bg-white/95 border-gray-200'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left side - Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>WEB DEVELOPER</span>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-4">
            {headerIcons.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
                }`}
                aria-label={item.label}
              >
                <item.icon size={18} />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
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
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <div className="flex flex-col space-y-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
            theme === 'dark'
              ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
          }`}>
            <img src="/assets/icons/grid.svg" alt="Grid" className="w-5 h-5" />
          </div>
          <button
            onClick={toggleTheme}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
              theme === 'dark' 
                ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
            }`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <img 
              src={theme === 'dark' ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"} 
              alt={theme === 'dark' ? "Sun" : "Moon"} 
              className="w-5 h-5" 
            />
          </button>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
            theme === 'dark'
              ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
          }`}>
            <Settings size={20} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainLayout;
