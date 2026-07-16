import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/data';

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/30 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            MSP<span className="text-amber-500">Builder's</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-amber-500 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex bg-white/10 hover:bg-amber-500 text-white px-6 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 text-sm font-semibold border border-white/10 hover:border-amber-500"
          >
            Contact Us
          </a>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-6 text-xl font-medium text-white">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-amber-500"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-amber-500 text-zinc-950 px-6 py-3 rounded-xl font-bold mt-4 w-full text-center block"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MainNavbar;
