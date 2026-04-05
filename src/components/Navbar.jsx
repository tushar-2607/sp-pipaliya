import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Globe,
  Mail,
} from "lucide-react";
import { IconButton } from "@mui/material";
import sunil from "../assets/sunil.png";
  
const sections = [
  { id: "hero", label: "Home", icon: <Home size={18} /> },
  { id: "about", label: "About", icon: <User size={18} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
  { id: "skills", label: "Skills", icon: <Code size={18} /> },
  { id: "languages", label: "Languages", icon: <Globe size={18} /> },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const current = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-[#081127] backdrop-blur-lg shadow-xl py-3" // Scroll thay tyare shadow add kari ane border kadhi nakhi
        : "bg-transparent py-6" // Top par hoy tyare border nathi
    }`}
  >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
            <img
              src={sunil}
              alt="Sunil"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-[#feecd5] hidden sm:block">
            Sunil Pipaliya
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex flex-col items-center space-y-1.5 transition-all duration-300 group ${
                activeSection === section.id
                  ? "text-[#feecd5]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-colors ${
                  activeSection === section.id
                    ? "bg-[#feecd5]/15"
                    : "group-hover:bg-white/5"
                }`}
              >
                {section.icon}
              </div>
              <span className="text-[14px]  font-medium">{section.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{ color: "#feecd5" }} // Icon no color set karva mate
          >
            {isMenuOpen ? <X /> : <Menu />}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#1e293b] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-4 p-3 rounded-xl transition-colors ${
                    activeSection === section.id
                      ? "bg-[#feecd5]/20 text-[#feecd5]"
                      : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  {section.icon}
                  <span className="font-bold">{section.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
