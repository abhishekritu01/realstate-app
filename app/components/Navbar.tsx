'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(8px)']);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/residences', label: 'Residences' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/location', label: 'Location' },
    { href: '/contact', label: 'Contact' },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 flex items-center justify-between text-white transition-all duration-300"
      >
        {/* Logo */}
        <Link href="/" className="font-serif text-xl tracking-wider">
          Horizonte Village
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/visit"
            className="ml-4 px-6 py-2 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500"
          >
            Schedule Visit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/visit"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-8 py-3 text-sm tracking-widest uppercase border border-white/30 hover:border-white transition-all duration-500"
          >
            Schedule Visit
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;