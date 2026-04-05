import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
} from "lucide-react";
import { IconButton, Tooltip } from "@mui/material";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/sunil-pipaliya-102563213",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      link: "mailto:sunilpipaliya17@gmail.com",
      label: "Email",
    },
    { icon: <Phone size={20} />, link: "tel:+447442107448", label: "Phone" },
  ];

  return (
    <footer className="relative bg-[#0f172a] pt-20 pb-10 border-t border-slate-800/50 overflow-hidden">
      {/* Subtle Background Glow for Depth */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission Section */}
          <div className="space-y-6">
            
              <h2 className=" font-semibold  text-white mb-4">
                SUNIL PIPALIYA
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-indigo-500/30 pl-4">
                "Dedicated to driving operational excellence by combining
                advanced business management strategies with precise financial
                analysis and exceptional customer service."
              </p>
       
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Experience",
                "Education",
                "Skills",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-[white] text-sm transition-all duration-300 flex items-center group"
                  >
                    <span className="h-px w-0 group-hover:w-4 bg-[white] mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">
              Contact Information
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-indigo-500/10 group-hover:text-white   transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-indigo-500/10 group-hover:text-white   transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">sunilpipaliya17@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 group">
                <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-indigo-500/10 group-hover:text-white   transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+44 7442107448</span>
              </div>
            </div>
          </div>

          {/* Action/Availability Section */}
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/30 backdrop-blur-sm">
            <h3 className="text-white font-bold mb-3 text-sm">
              Open for Collaboration
            </h3>
            <p className="text-slate-400 text-xs mb-5 leading-relaxed">
              Available for accounting, finance, or business management roles.
              Let's drive results together.{" "}
            </p>
            <a
              href="#contact"
              className="w-full py-2 gradient-bg rounded-xl font-bold text-white flex items-center justify-center space-x-3 disabled:opacity-70 transition-all duration-300"
              >
              Get In Touch <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Final Footer Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-[11px] uppercase tracking-widest font-medium text-center">
            © 2026 
            <span className="text-slate-300"> Sunil Pipaliya</span>  BSc.(Hons) Business Management in Accounting • All rights reserved.
          </p>

          {/* <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
          >
            <span className="text-xs font-bold uppercase tracking-tighter">
              Scroll to Top
            </span>
            <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
              <ArrowUp size={18} />
            </div>
          </motion.button> */}
        </div>
      </div>
    </footer>
  );
}
