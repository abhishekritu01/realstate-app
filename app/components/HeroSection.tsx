'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/city-sunset-buildings-173137.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <source src="https://res.cloudinary.com/dny35o8vg/video/upload/v1772823304/about_taoubh.mp4" type="video/webm" />
        <source src="https://res.cloudinary.com/dny35o8vg/video/upload/v1772823304/about_taoubh.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        {/* Brand */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.35em] uppercase mb-4 text-white/80"
        >
          Horizonte Village
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight"
        >
          Where Dreams Touch the Sky
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl mt-6 text-sm md:text-base lg:text-lg text-white/75"
        >
          Exclusive residences in the heart of the city – where every sunset paints your home.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            href="/residences"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Discover Residences</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>

          <Link
            href="/visit"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-500"
          >
            Schedule Visit
          </Link>
        </motion.div>

        {/* Enhanced Scroll Indicator with Pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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

export default HeroSection;