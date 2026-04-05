import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Note: Replace with actual service/template IDs when deploying
      // For now, I'll use placeholders that would be replaced by the user
      // but I'll implement the logic as requested.
      await emailjs.sendForm(
        'service_1zs2ba8', 
        'template_p83z263', 
        form.current, 
        'sqOgxub0sTTMtYUap'
      );

      toast.success('Message sent successfully');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pb-24 overflow-x-hidden">
    <div className="container mx-auto px-4 sm:px-6"> {/* Mobile ma padding adjust kari chhe */}
      <SectionHeading subtitle="Get in touch for collaborations or inquiries.">
        Contact Me
      </SectionHeading>
  
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start justify-items-center">
        
        {/* Left Side: Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 w-full max-w-full sm:max-w-lg" // Mobile ma 100% width ane center alignment
        >
          {[
            { icon: <Mail size={28} />, title: "Email Me", detail: "sunilpipaliya17@gmail.com", color: "bg-indigo-500/20", text: "text-indigo-400" },
            { icon: <Phone size={28} />, title: "Call Me", detail: "+44 7442107448", color: "bg-purple-500/20", text: "text-purple-400" },
            { icon: <MapPin size={28} />, title: "Location", detail: "London, United Kingdom", color: "bg-pink-500/20", text: "text-pink-400" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 hover-glow group flex items-center space-x-5 md:space-x-6 mx-auto">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.color} flex items-center justify-center ${item.text} shrink-0`}>
                {item.icon}
              </div>
              <div className="min-w-0"> {/* Email overflow na thay te mate */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm md:text-base break-words md:break-normal line-clamp-1 hover:line-clamp-none transition-all">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
  
        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 md:p-10 w-full max-w-full sm:max-w-lg" // Form box center ma rahese
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your Email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Your Phone Number"
              />
            </div>
  
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
  
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 gradient-bg rounded-xl font-bold text-white flex items-center justify-center space-x-3 disabled:opacity-70 transition-all duration-300"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={20} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
  
      </div>
    </div>
  </section>
  );
}
