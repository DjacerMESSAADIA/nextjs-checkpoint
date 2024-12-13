'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const menuItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      <nav className="fixed top-1 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.span>
            
            {/* Mobile menu button */}
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" 
                style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}
              />
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"
                style={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <div className="w-6 h-0.5 bg-white transition-all"
                style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}
              />
            </motion.button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map(({ label, id }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="hover:text-accent transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-sm"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {menuItems.map(({ label, id }) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
} 