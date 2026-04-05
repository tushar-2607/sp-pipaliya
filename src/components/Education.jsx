import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const education = [
  {
    degree: "BSc.(Hons) Business Management in Accounting",
    period: "Sep 2022 – Sep 2025",
    institution: "University of East London, UEL London, United Kingdom",
    details: [
      "Conducted research with the potential to reshape conventional approaches to business management, including strategic decision-making, organizational behavior, and market analysis.",
      "Gained an in-depth understanding of business processes, enabling the tackling of complex challenges, including financial management, marketing strategies, and data-driven decision-making.",
      "Demonstrated the ability to develop tailored business solutions, emphasizing the practical application of management concepts in real-world scenarios.",
      "Acquired proficiency in utilizing business management software tools, specifically Microsoft Excel and various CRM systems, to streamline operations and enhance business efficiency.",
      "Developed strong analytical and programming skills in essential tools like Excel and Python, empowering me to create custom reports, automate business processes, and improve operational effectiveness."
    ]
  },
  {
    degree: "Higher Secondary Certificate Examination (H.S.C.E) In Commerce.",
    period: "May 2019 – May 2020",
    institution: "I.P. Savani High School Surat, India",
    details: [
      "In Accountancy, I have learned the basics of accounting, including how to prepare financial statements, maintain ledgers, create trial balances, and understand the principles of bookkeeping.",
      "In Business Studies, I have gained insights into business operations, focusing on management principles, the business environment, entrepreneurship, and the roles played by various departments within a business.",
      "In Economics, I have studied both microeconomics and macroeconomics, covering key concepts such as supply and demand, market structures, national income, inflation, and fiscal policy.",
      "In Mathematics, I have explored topics such as statistics, commercial mathematics, and financial mathematics, which have equipped me to analyze business data effectively and make informed decisions."
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="pb-24 bg-slate-900/50 md:px-8">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading subtitle="Academic qualifications and foundational learning.">
          Education
        </SectionHeading>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 max-w-full mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover-glow flex flex-col h-full"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">{edu.degree}</h3>
                  <div className="flex items-center text-slate-400 text-sm mt-1">
                    <Calendar size={14} className="mr-2" />
                    {edu.period}
                  </div>
                </div>
              </div>

              <div className="flex items-center text-slate-500 text-xs mb-6">
                <MapPin size={12} className="mr-2" />
                {edu.institution}
              </div>

              <ul className="space-y-3 flex-grow">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-indigo-500 mr-3 mt-0.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
