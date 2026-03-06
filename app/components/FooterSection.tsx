'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const FooterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
  ];

  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Residences', href: '/residences' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Location', href: '/location' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <footer
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {/* Background with infinite zoom */}
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
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/footer-bg.webm" type="video/webm" />
          <source src="/footer-bg.mp4" type="video/mp4" />
        </video>
        <img
          src="/images/luxury-skyline.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </motion.div>

      {/* Overlay – consistent gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl tracking-wide">Horizonte Village</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Where dreams touch the sky – exclusive residences crafted for those who seek the extraordinary.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="group"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="text-white/60 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h4 className="text-sm tracking-[0.3em] uppercase text-white/50">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h4 className="text-sm tracking-[0.3em] uppercase text-white/50">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-1 shrink-0 text-white/50" />
                <span className="text-sm">Horizonte Village, Downtown District</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone size={18} className="shrink-0 text-white/50" />
                <span className="text-sm">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={18} className="shrink-0 text-white/50" />
                <span className="text-sm">contact@horizontevillage.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h4 className="text-sm tracking-[0.3em] uppercase text-white/50">Newsletter</h4>
            <p className="text-white/60 text-sm">Subscribe to receive updates on new residences and events.</p>
            <form className="flex flex-col sm:flex-row gap-2 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/20 px-4 py-3 text-sm outline-none focus:border-white transition-colors text-white placeholder-white/40"
              />
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ArrowRight size={16} />
                </span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs"
        >
          <div>© {new Date().getFullYear()} Horizonte Village. All rights reserved.</div>
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button (optional) */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 z-20 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:border-white transition-colors group"
        aria-label="Scroll to top"
      >
        <ArrowRight size={18} className="rotate-[-90deg] text-white/60 group-hover:text-white" />
      </motion.button>
    </footer>
  );
};

export default FooterSection;