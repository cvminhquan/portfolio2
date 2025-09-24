"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import {
  FileText,
  FolderOpen,
  Menu,
  PenTool,
  Send,
  User,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const headerIcons = [
    { icon: User, label: "About", target: "about" },
    { icon: FileText, label: "Resume", target: "resume" },
    { icon: FolderOpen, label: "Portfolio", target: "portfolio" },
    { icon: PenTool, label: "Skills", target: "skills" },
    { icon: Send, label: "Contact", target: "contact" },
  ];

  const handleNavigate = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  useEffect(() => {
    const sectionIds = [
      "about",
      "resume",
      "portfolio",
      "skills",
      "contact",
    ];

    const handleScroll = () => {
      const scrollYWithOffset = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollYWithOffset >= top && scrollYWithOffset < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed ${isScrolled ? 'top-2' : 'top-2'} lg:left-96 z-[10000] md:px-4`}
    >
      <div className={`flex w-screen m-0 max-w-[1200px] sm:mx-auto justify-between items-center px-4 py-3 rounded-[160px] ${
        isScrolled
          ? (theme === 'dark' ? 'bg-gray-900/85 border border-white/10 shadow-md' : 'bg-gray-100 border border-gray-200 shadow-md')
          : 'bg-[linear-gradient(123.51deg,rgba(215,237,237,0.1)_-61.8%,rgba(204,235,235,0.01))] border-t-[hsla(0,0%,100%,0.1)] border-t border-solid'
      }`}>
        {/* Left side - Profile */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
          <span
            className={`font-medium text-xs sm:text-sm ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="hidden sm:inline">WEB DEVELOPER</span>
            <span className="sm:hidden">WEB DEV</span>
          </span>
        </div>

        {/* Right side - Icons (desktop) */}
        <div className="hidden sm:flex items-center space-x-4">
          {headerIcons.map((item, index) => {
            const isActive = activeSection === item.target;
            return (
              <div key={item.label} className="relative group">
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`w-12 h-12 cursor-pointer rounded-full flex items-center justify-center transition-all duration-200 ${
                    theme === "dark"
                      ? isActive
                        ? "bg-white text-gray-900 shadow"
                        : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20"
                      : isActive
                      ? "bg-gray-900 text-white shadow"
                      : "bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300"
                  }`}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  title={item.label}
                  onClick={() => handleNavigate(item.target)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleNavigate(item.target);
                    }
                  }}
                >
                  <item.icon size={22} />
                </motion.button>
                <span
                  className={`pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded-md px-2 py-1 shadow transition-opacity duration-150 text-sm opacity-0 group-hover:opacity-100 ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-200"
                      : "bg-white text-gray-900 border border-gray-200"
                  }`}
                  style={{ top: "100%" }}
                  role="tooltip"
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`sm:hidden w-10 h-10 rounded-full flex items-center justify-center ${
            theme === "dark"
              ? "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen((v) => !v);
            }
          }}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            id="mobile-menu"
            initial={{ x: 320, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className={`fixed z-[10001] sm:hidden inset-0 overflow-y-auto ${
              theme === "dark"
                ? "bg-black/90"
                : "bg-white"
            }`}
            role="menu"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  C
                </div>
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Menu</span>
              </div>
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-white/10 text-gray-200' : 'bg-gray-200 text-gray-700'
                }`}
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <nav className="py-2" aria-label="Mobile Navigation">
              {headerIcons.map((item) => {
                const isActive = activeSection === item.target;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.target)}
                    className={`w-full text-left px-5 py-4 flex items-center justify-between ${
                      theme === "dark"
                        ? "text-gray-200 hover:bg-white/10"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                    role="menuitem"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon size={18} />
                      <span className={`text-base ${isActive ? "font-semibold" : ""}`}>
                        {item.label}
                      </span>
                    </span>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>⟶</span>
                  </button>
                );
              })}
            </nav>
          </motion.aside>
        </>
      )}
    </motion.header>
  );
};

export default Hero;
