import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../constants/animations';
import { ABOUT_FEATURES } from '../../constants/data';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Overlapping Image Composition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.img
                variants={fadeUp}
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
                alt="Architects reviewing plans"
                className="rounded-2xl w-full h-[300px] md:h-[400px] object-cover mt-12 shadow-2xl border border-white/10"
              />
              <motion.img
                variants={fadeUp}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Modern interior construction"
                className="rounded-2xl w-full h-[300px] md:h-[400px] object-cover shadow-2xl border border-white/10"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900/90 backdrop-blur-xl border border-amber-500/30 p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-[0_0_50px_-12px_rgba(245,158,11,0.4)]"
              >
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">15+</span>
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-1">Years of<br />Excellence</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="relative z-10"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-amber-500"></span>
              <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">About Our Company</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Building Legacies, Not Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Structures.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-zinc-400 text-lg leading-relaxed mb-8">
              At MSP Builder's, we merge architectural vision with structural integrity. Since our founding, we have been at the forefront of luxury construction, utilizing cutting-edge technology and premium materials to deliver spaces that inspire and endure.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              {ABOUT_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                      <Icon size={20} />
                    </div>
                    <span className="text-zinc-200 font-medium">{feature.title}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                to="/about"
                className="inline-flex bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold border border-white/10 backdrop-blur-md transition-all duration-300 items-center gap-2 group cursor-pointer"
              >
                Discover Our History
                <CheckCircle2 size={18} className="text-amber-500 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
