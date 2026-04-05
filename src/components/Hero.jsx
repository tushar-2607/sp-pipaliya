import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Linkedin, Instagram, Mail } from 'lucide-react';
import { IconButton, Tooltip } from '@mui/material';
import Typewriter from 'typewriter-effect';
import sunil from '../assets/sunil.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 sm:pb-24 overflow-hidden bg-[#0f172a]">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container md:mx-8 px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#feecd5]">Hi There!</h2>
            <motion.span 
              animate={{ rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-4xl md:text-5xl"
            >
              👋🏻
            </motion.span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="font-medium text-[#feecd5]">I'm</span> <span className="gradient-text">Sunil Pipaliya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-300 mb-4 font-medium tracking-wide">
          BSc.(Hons) Business Management in Accounting
          </p>

          <div className="text-xl md:text-3xl  text-[#feecd5] mb-10 h-10">
            <Typewriter
              options={{
                strings: [
                  'Accountant',
                  'Customer Service Representative',
                  'Sales Assistant'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+447442107448"
              className="inline-flex items-center justify-center w-10 h-10 bg-[#feecd5] text-[#0f172a] rounded-full font-bold transition-all duration-300 hover:bg-white"
            >
              <Phone size={22} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/sunil-pipaliya-102563213?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 bg-[#feecd5] text-[#0f172a] rounded-full font-bold transition-all duration-300 hover:bg-white"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/sunil_pipaliya.89/"
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 bg-[#feecd5] text-[#0f172a] rounded-full font-bold transition-all duration-300 hover:bg-white"
            >
              <Instagram size={22} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sunilpipaliya17@gmail.com"
              className="inline-flex items-center justify-center w-10 h-10 bg-[#feecd5] text-[#0f172a] rounded-full font-bold transition-all duration-300 hover:bg-white"
            >
              <Mail size={22} />
            </motion.a>
          </div>

          <motion.div
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contact" 
              className="inline-flex t items-center px-6 py-3 gradient-bg rounded-xl font-semibold text-white transition-all duration-300  uppercase"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing Border with custom animation */}
            <div className="absolute inset-0 rounded-full image-glow p-1">
              <div className="w-full h-full rounded-full bg-[#0f172a]" />
            </div>
            
            {/* Image Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden  shadow-2xl group">
              <img 
                src={sunil} 
                alt="Sunil Pipaliya" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Extra Glow */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
