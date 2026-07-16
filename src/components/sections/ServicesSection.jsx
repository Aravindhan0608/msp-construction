import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cardVariants, makeStaggerContainer } from '../../constants/animations';
import { SERVICES } from '../../constants/data';

const containerVariants = makeStaggerContainer(0.15);

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? SERVICES : SERVICES.slice(0, 4);

  return (
    <section id="services" className="relative py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-800/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-amber-500"></span>
              <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Modern Infrastructure.</span>
            </h2>
          </motion.div>

          <motion.button
            onClick={() => setShowAll((v) => !v)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-zinc-300 hover:text-amber-500 transition-colors pb-2 border-b border-transparent hover:border-amber-500 font-medium whitespace-nowrap cursor-pointer outline-none"
          >
            {showAll ? 'View Less Services' : 'View All Services'}
            <ArrowRight size={18} className={`transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
          </motion.button>
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={service.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group relative bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500" />

                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="w-16 h-16 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-all duration-300 mb-6 group-hover:-translate-y-1">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors flex-grow">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
