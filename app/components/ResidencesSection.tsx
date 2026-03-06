'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const residences = [
  {
    title: 'Skyline Residences',
    desc: 'Panoramic city views with floor-to-ceiling glass and private terraces.',
    image: '/brian-zajac-4LngtXlsjJs-unsplash.jpg',
  },
  {
    title: 'Garden Villas',
    desc: 'A sanctuary surrounded by nature, crafted for serenity and privacy.',
    image: '/gerda-kauks-KYM5QsbRsxk-unsplash.jpg',
  },
  {
    title: 'Penthouse Collection',
    desc: 'The pinnacle of luxury living with expansive spaces and skyline vistas.',
    image: '/robbie-duncan-L61Ekz4oTt4-unsplash.jpg',
  },
];

const ResidencesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-24 md:pt-32"
    >
      {/* Background Video with subtle infinite zoom */}
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
          className="w-full h-full object-cover brightness-90"
        >
          <source src="https://res.cloudinary.com/dny35o8vg/video/upload/v1772823306/5057332-hd_1920_1080_30fps_nmliem.mp4" type="video/mp4" />
          {/* Fallback for unsupported browsers */}
          <img
            src="/images/luxury-building.jpg"
            alt="Luxury Residences"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Overlay – matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70"
        >
          Residences
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
        >
          Crafted for Extraordinary Living
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-6 text-sm md:text-base lg:text-lg text-white/70"
        >
          Each residence at Horizonte Village is designed to blend elegance,
          comfort, and breathtaking views — creating homes that elevate
          everyday living.
        </motion.p>

        {/* Residences Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.6 },
            },
          }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {residences.map((res, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
              }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-sm border border-white/10 cursor-pointer"
            >
              {/* Image container with zoom */}
              <div className="relative h-[460px] overflow-hidden">
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay that deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Text content with slide-up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-serif text-2xl text-white mb-2">
                  {res.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 max-w-xs opacity-90 group-hover:opacity-100 transition-opacity">
                  {res.desc}
                </p>
                {/* "View details" indicator */}
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                  View Details
                  <svg
                    className="w-4 h-4 ml-2 translate-x-0 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>

              {/* Decorative top line */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-white/30 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-14"
        >
          
          <Link
            href="/residences"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore All Residences</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </motion.div>

        {/* Enhanced scroll indicator with pulse effect */}
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

export default ResidencesSection;