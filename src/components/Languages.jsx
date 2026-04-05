import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const languages = [
  { name: "English", level: "Proficient", percentage: 90 },
  { name: "Hindi", level: "Native", percentage: 100 },
  { name: "Gujarati", level: "Native", percentage: 100 }
];

export default function Languages() {
  return (
    <section id="languages" className="pb-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Multilingual fluency and communication capabilities.">
          Languages
        </SectionHeading>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover-glow flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">{lang.name}</h3>
              <p className="text-indigo-400 font-normal mb-6">{lang.level}</p>
              
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full gradient-bg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
