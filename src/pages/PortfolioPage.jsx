import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageNavbar from '../components/layout/PageNavbar';
import { ALL_PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '../constants/data';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? ALL_PORTFOLIO_PROJECTS
    : ALL_PORTFOLIO_PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-neutral-950 min-h-screen pt-32 pb-20">

      <PageNavbar theme="neutral" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">Explore our collection of meticulously crafted spaces, showcasing our commitment to excellence in every dimension.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 border rounded-full text-sm tracking-widest uppercase transition-all duration-300 ${
                activeFilter === category
                  ? 'border-amber-500 bg-amber-500 text-black font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                  : 'border-white/10 text-neutral-400 hover:border-amber-500 hover:text-amber-500 bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                className="group relative overflow-hidden h-[400px] cursor-pointer rounded-2xl border border-white/5"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-amber-500 text-xs tracking-widest uppercase mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-playfair text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default PortfolioPage;
