import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { makeStaggerContainer } from '../../constants/animations';
import { FEATURED_PROJECTS } from '../../constants/data';

const containerVariants = makeStaggerContainer(0.2);

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-zinc-950 text-white border-t border-white/5">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-amber-500"></span>
              <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Projects.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-zinc-400 max-w-md text-sm md:text-base md:text-right">
              Explore our curated portfolio of landmark structures. Each project represents our uncompromising commitment to engineering excellence and aesthetic mastery.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6"
        >
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer ${project.span}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                  <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-400">
                    {project.category}
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-zinc-300 text-sm">
                        <MapPin size={14} className="text-amber-500" />
                        {project.location}
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-block px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300 hover:border-amber-500/50"
          >
            View Complete Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
