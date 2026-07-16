import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import MainNavbar from '../layout/MainNavbar';
import { fadeUp, staggerContainer } from '../../constants/animations';
import { HERO_STATS } from '../../constants/data';

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen bg-zinc-950 font-sans selection:bg-amber-500 selection:text-white overflow-hidden">

      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888081643-eb35ec6179b4?q=80&w=2070&auto=format&fit=crop"
          alt="Modern construction site"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
      </div>

      <MainNavbar />

      {/* Main Hero Content */}
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">Premium Construction Services</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Building Dreams <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Into Reality.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light"
            >
              We don't just construct buildings; we engineer architectural masterpieces. Delivering high-end commercial and residential spaces with uncompromising precision, luxury, and modern innovation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group relative flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 rounded-full font-bold transition-all duration-300 overflow-hidden shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]"
              >
                <span className="relative z-10">Get a Quote</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold border border-white/10 backdrop-blur-md transition-all duration-300"
              >
                <Play size={18} className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>View Projects</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Floating Stats */}
          <motion.div
            className="lg:col-span-5 grid gap-4 relative mt-12 lg:mt-0"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none" />

            {HERO_STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/5 hover:border-amber-500/30 transition-colors duration-500 group overflow-hidden ${index === 1 ? 'lg:translate-x-12' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                      <p className="text-sm text-zinc-400 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default HeroSection;
