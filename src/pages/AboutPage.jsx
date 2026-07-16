import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageNavbar from '../components/layout/PageNavbar';
import { fadeUp } from '../constants/animations';
import { COMPANY_MILESTONES, CLIENT_REVIEWS, COMPANY_PILLARS } from '../constants/data';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500 selection:text-white">

      <PageNavbar theme="zinc" />

      {/* Hero Header */}
      <header className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-fixed opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-sm mb-4 block">Est. 2010</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Mastery.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              We bridge the gap between architectural imagination and structural reality. For over a decade, MSP Builder's has been the silent engine behind the world's most iconic skylines.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="py-24 border-y border-white/5 bg-zinc-900/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">The Engineering <span className="text-amber-500">Philosophy</span></h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  At MSP Builder's, we believe that every building is a living monument to human potential. We don't just pour concrete; we engineer environments that inspire growth and safety. Our journey began with a simple belief: that luxury is found in the invisible precision of the structure.
                </p>
                <p>
                  Every project undergoes rigorous stress-testing and architectural scrutiny. We have spent thousands of hours curating a global network of material suppliers to ensure that every grain of marble and every ton of steel is ethically sourced and of the highest grade.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {COMPANY_PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                // Preserves the original staggered vertical offset (2nd item down, 3rd item up)
                const offsetClass = index === 1 ? 'mt-8' : index === 2 ? '-mt-8' : '';
                return (
                  <div key={pillar.title} className={`p-8 rounded-3xl bg-zinc-900/50 border border-white/5 text-center ${offsetClass}`}>
                    <Icon className="text-amber-500 mx-auto mb-4" size={32} />
                    <h4 className="text-white font-bold text-xl">{pillar.title}</h4>
                    <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">{pillar.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight">Project <span className="text-amber-500">Milestones</span></h2>
          </div>

          <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-8 md:pl-12 space-y-16">
            {COMPANY_MILESTONES.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[53px] top-0 w-6 h-6 rounded-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)] border-4 border-zinc-950" />
                <span className="text-amber-500 font-bold text-2xl mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 text-lg max-w-2xl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Elite <span className="text-amber-500">Reviews</span></h2>
            <p className="text-zinc-500">Voices from our most prestigious partnerships.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CLIENT_REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="p-10 rounded-3xl bg-zinc-900/40 border border-white/5 relative group hover:border-amber-500/30 transition-colors"
              >
                <Quote className="text-amber-500/10 absolute top-8 right-8 group-hover:text-amber-500/20 transition-colors" size={48} />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={14} className="fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-zinc-300 italic mb-8 relative z-10 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="text-white font-bold text-lg">{review.name}</p>
                  <p className="text-amber-500 text-sm uppercase tracking-widest">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Your <span className="text-amber-500">Legacy?</span></h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">Contact us today for a consultation with our senior project architects and engineers.</p>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-12 py-5 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg transition-all shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)]"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
