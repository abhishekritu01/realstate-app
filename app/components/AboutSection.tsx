'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Video with infinite zoom (matches Hero) */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 h-[120%] -top-[10%]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/6754296-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay – consistent with Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto text-white">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80"
        >
          Our Story
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
        >
          Where Vision Meets Craft
        </motion.h2>

        {/* Description Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl mt-6 text-sm md:text-base lg:text-lg text-white/80"
        >
          Perched at the intersection of art and architecture, Horizonte Village
          is more than a residence — it's a living canvas where light sculpts
          space and every detail whispers elegance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="max-w-2xl mt-4 text-sm md:text-base lg:text-lg text-white/80"
        >
          Designed by visionaries and crafted by masters, our homes embrace the
          skyline while offering intimate sanctuaries where beauty becomes part
          of everyday life.
        </motion.p>

        {/* Stats Grid with Stagger and Hover Effects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
          }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {[
            { value: '25', label: 'Years of Excellence' },
            { value: '150+', label: 'Award Winning Projects' },
            { value: '12', label: 'Iconic Locations' },
            { value: '∞', label: 'Timeless Design' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="text-center group cursor-default"
            >
              <div className="font-serif text-3xl md:text-4xl text-white group-hover:text-white/90 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-white/60 mt-2 group-hover:text-white/80 transition-colors">
                {stat.label}
              </div>
              {/* Subtle decorative line */}
              <div className="w-0 h-px bg-white/30 mx-auto group-hover:w-12 transition-all duration-500 mt-2" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-14"
        >
          <Link
            href="/about"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/40 hover:border-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Discover Our Philosophy</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </motion.div>

        {/* Enhanced Scroll Indicator with Pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] text-white/60">SCROLL</span>
          <motion.div
            animate={{
              boxShadow: ['0 0 0 0 rgba(255,255,255,0.3)', '0 0 0 8px rgba(255,255,255,0)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;