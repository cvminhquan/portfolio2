"use client";

import { motion } from 'framer-motion';
import { Github, Globe, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", target: "about" },
    { label: "Resume", target: "resume" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Skills", target: "skills" },
    { label: "Blog", target: "blog" },
    { label: "Contact", target: "contact" },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cvminhquan/', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/cvminhquan', icon: Github },
    { label: 'Portfolio', href: 'https://cvminhquan.com', icon: Globe },
    { label: 'Email', href: 'mailto:cvminhquan@gmail.com', icon: Mail },
  ];

  const handleNavigate = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div>
                <p className="text-white font-semibold leading-none">
                  Chau Vu Minh Quan
                </p>
                <p className="text-gray-400 text-sm">Front‑End Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building delightful, accessible interfaces with React, Next.js,
              and Tailwind CSS.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <nav
              className="flex flex-wrap gap-3"
              aria-label="Footer Navigation"
            >
              {quickLinks.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleNavigate(item.target)}
                  className="px-3 py-1.5 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700/60 text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="mt-10 h-px bg-white/10" />
        <div className="pt-6 text-center text-gray-400 text-sm">
          © {currentYear} Chau Vu Minh Quan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
