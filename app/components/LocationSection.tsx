'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Train, Plane, School } from 'lucide-react';

const LocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const locations = [
    { icon: Briefcase, label: 'Downtown', time: '10 min', description: 'Business & financial district' },
    { icon: Train, label: 'Metro Station', time: '5 min', description: 'Direct access to city network' },
    { icon: Plane, label: 'International Airport', time: '15 min', description: 'Global connections' },
    { icon: School, label: 'Schools & Hospitals', time: '5‑10 min', description: 'Top‑rated institutions nearby' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 overflow-hidden text-white"
    >
      {/* Background video with infinite zoom - NO OPACITY */}
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
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dny35o8vg/video/upload/v1772823306/2169880-uhd_3840_2160_30fps_1_1_1_1_1_ubuqxz.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/images/city-aerial.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Overlay – same gradient as Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70">
              Location
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              In the Heart of the City
            </h2>
            <p className="mt-6 text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
              Horizonte Village is situated in the most desirable neighborhood, 
              offering seamless access to business districts, luxury shopping, 
              fine dining, and world‑class entertainment.
            </p>

            {/* Proximity List with Icons - NO BLUR */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
              }}
              className="mt-10 space-y-5"
            >
              {locations.map((loc, index) => {
                const Icon = loc.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <div className="relative">
                      <Icon size={24} className="text-white/60 group-hover:text-white transition-colors" />
                      {/* Removed blur animation */}
                    </div>
                    <div className="flex-1 border-b border-white/10 pb-3 group-hover:border-white/30 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="font-serif text-xl text-white/90">{loc.label}</span>
                        <span className="text-sm tracking-wider text-white/50">{loc.time}</span>
                      </div>
                      <p className="text-xs text-white/50 mt-1">{loc.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-12"
            >
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500 overflow-hidden">
                <span className="relative z-10">Explore Neighborhood</span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content – Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } },
            }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 group hover:border-white/30 transition-all duration-500">
              <iframe
                src="https://maps.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[480px] lg:h-[540px]"
                loading="lazy"
                title="Location Map"
              />
              {/* Gradient overlay on map */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Decorative pin - NO BLUR */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-white/20"
              >
                <MapPin size={16} className="text-white/80" />
                <span className="text-xs tracking-wider">Horizonte Village</span>
              </motion.div>
            </div>
            <p className="text-xs text-white/40 mt-3 text-right">
              *Approximate location for illustrative purposes
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with pulse effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-white/60">DISCOVER</span>
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
    </section>
  );
};

export default LocationSection;