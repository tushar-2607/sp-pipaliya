import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Calculator, MessageSquare, Brain, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: "Software",
    icon: <Laptop size={24} />,
    skills: ["QuickBooks", "Xero", "Microsoft Excels", "Payroll"]
  },
  {
    title: "Accounting skills",
    icon: <Calculator size={24} />,
    skills: [
      "Financial Analysis & Reporting",
      "Accounting Software",
      "Reconciliation & Accounts Management (Accounts Payable/Receivable)",
      "Budgeting & Forecasting"
    ]
  },
  {
    title: "Customer service and communication skills",
    icon: <MessageSquare size={24} />,
    skills: [
      "Customer Interaction & Resolution",
      "Issue Resolution",
      "Collaboration & Teamwork",
      "Service Level Management"
    ]
  },
  {
    title: "Soft skills",
    icon: <Brain size={24} />,
    skills: [
      "Attention to Detail",
      "Time Management & Organization",
      "Problem-Solving",
      "Adaptability & Continuous Learning"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Technical and interpersonal proficiencies.">
          Skills & Strengths
        </SectionHeading>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover-glow flex flex-col h-full group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-6 leading-tight">{category.title}</h3>
              
              <ul className="space-y-3 flex-grow">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-indigo-500 mr-3 mt-0.5 shrink-0" />
                    {skill}
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
