import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { fadeUp } from '../../constants/animations';
import { CONTACT_INFO } from '../../constants/data';
import { useContactForm } from '../../hooks/useContactForm';
import Footer from '../layout/Footer';

const ContactSection = () => {
  const { formData, status, errorMessage, handleChange, handleSubmit } = useContactForm();

  return (
    <footer id="contact" className="relative bg-zinc-950 pt-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-amber-500"></span>
              <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Vision Together.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-zinc-400 mb-12 max-w-md">
              Ready to start your next premium project? Reach out to our team of experts for a consultation and comprehensive quote.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Call Us Directly</p>
                  <p className="text-xl font-semibold text-white">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Email Address</p>
                  <p className="text-xl font-semibold text-white">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Headquarters</p>
                  <p className="text-lg font-semibold text-white">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl relative"
          >
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Project Details</label>
                <textarea
                  rows="4"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-3 bg-green-500/10 border border-green-500/50 text-green-400 rounded-xl text-center text-sm">
                  Your message has been saved to the database successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl text-center text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/50 text-zinc-950 font-bold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        <Footer />
      </div>
    </footer>
  );
};

export default ContactSection;
