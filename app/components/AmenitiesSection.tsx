'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Waves, Dumbbell, Trees, Car, ShieldCheck, Wifi } from 'lucide-react';

const amenities = [
  { 
    icon: Waves, 
    title: 'Infinity Pool',
    description: 'Edge‑less pool overlooking the skyline, heated year‑round for morning laps or sunset soirees.'
  },
  { 
    icon: Dumbbell, 
    title: 'Fitness Center',
    description: 'State‑of‑the‑art equipment with personal training and wellness classes available.'
  },
  { 
    icon: Trees, 
    title: 'Landscaped Gardens',
    description: 'Terraced gardens with native plants, meditation zones, and sculptural water features.'
  },
  { 
    icon: Car, 
    title: 'Private Parking',
    description: 'Secure, valet‑serviced parking with EV charging stations for every residence.'
  },
  { 
    icon: ShieldCheck, 
    title: '24/7 Security',
    description: 'Multi‑layer security with facial recognition, 24/7 monitoring, and concierge.'
  },
  { 
    icon: Wifi, 
    title: 'High Speed Internet',
    description: 'Fiber‑optic pre‑wiring with dedicated bandwidth for seamless work and entertainment.'
  },
];

const AmenitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
          <source src="https://res.cloudinary.com/dny35o8vg/video/upload/v1772823304/about_taoubh.mp4" type="video/mp4" />
          {/* Fallback image if video not supported */}
          <img
            src="/images/luxury-amenities.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Overlay – same gradient as Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70">
            Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Designed for Modern Living
          </h2>
          <p className="mt-6 text-white/70 text-sm md:text-base max-w-2xl">
            Every detail crafted to elevate your lifestyle — from wellness to 
            convenience, discover a world of refined comforts.
          </p>
        </motion.div>

        {/* Amenities Grid with staggered children - NO BLUR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative bg-black/60 p-8 border border-white/10 hover:border-white/30 transition-all duration-500"
              >
                {/* Icon - NO BLUR */}
                <div className="mb-6">
                  <Icon
                    size={40}
                    className="text-white/80 group-hover:text-white transition-colors duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl mb-3 group-hover:text-white transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/40 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional highlight section - NO BLUR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-8 bg-black/60 border border-white/10"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-2">
              Beyond Expectations
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-light">
              Concierge Services
            </h3>
            <p className="text-white/70 mt-4 max-w-2xl text-sm">
              From private dining reservations to yacht charters, our dedicated 
              concierge team ensures every need is met with discretion and excellence.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-serif text-3xl text-white">24/7</div>
              <div className="text-xs tracking-widest text-white/50">AVAILABILITY</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="font-serif text-3xl text-white">5★</div>
              <div className="text-xs tracking-widest text-white/50">SERVICE</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 text-center md:text-left"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Discover All Amenities</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator with pulse effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-white/60">EXPLORE</span>
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

export default AmenitiesSection;