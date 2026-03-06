'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const contactDetails = [
    { icon: MapPin, label: 'Address', value: 'Horizonte Village, Downtown District' },
    { icon: Phone, label: 'Phone', value: '+1 (234) 567-890' },
    { icon: Mail, label: 'Email', value: 'contact@horizontevillage.com' },
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
          <source src="https://res.cloudinary.com/dny35o8vg/video/upload/v1772823318/6754296-uhd_3840_2160_30fps_1_hrgxxb.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/images/luxury-lobby.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Overlay – same gradient as Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              Let’s Start <br /> the Conversation
            </h2>
            <p className="mt-6 text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
              Whether you're looking for your next residence or want to learn
              more about our developments, our team is ready to assist you.
            </p>

            {/* Contact Details with Icons - NO BLUR */}
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
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="relative">
                      <Icon size={24} className="text-white/60 group-hover:text-white transition-colors" />
                      {/* Removed blur div */}
                    </div>
                    <div className="flex-1 border-b border-white/10 pb-3 group-hover:border-white/30 transition-colors">
                      <span className="text-xs tracking-wider text-white/50">{detail.label}</span>
                      <p className="font-serif text-lg text-white/90">{detail.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content – Contact Form - NO BLUR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
            }}
            className="relative"
          >
            <div className="bg-black/60 border border-white/10 p-8 rounded-xl hover:border-white/30 transition-all duration-500">
              <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-white transition-colors text-white placeholder-white/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-white transition-colors text-white placeholder-white/40"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-white transition-colors text-white placeholder-white/40"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-white transition-colors text-white placeholder-white/40 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/40 group-hover:w-full transition-all duration-700" />
            </div>
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
        <span className="text-xs tracking-[0.3em] text-white/60">CONNECT</span>
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

export default ContactSection;