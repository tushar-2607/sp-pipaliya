import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: "Customer Service Representative",
    company: "William Hill Part-time",
    period: "May 2026-Present. 11 mon",
    location: "Greater London, England, United Kingdom. On-site",
    responsibilities: [
      "Welcoming customers with a friendly face",
      "Processing bets and assisting with customer queries",
      "Helping customers by demonstrating how to use betting terminals",
      "Building relationships with our customers and providing excellent customer service",
      "Championing safer gambling at all times",
      "Supporting managers with shop displays and opening/closing activities as required"
    ],
    financial: [
      "Handling cash transactions accurately, including accepting payments and issuing winnings",
      "Balancing the till and performing end-of-day cash reconciliation",
      "Monitoring shop takings and ensuring all financial records are correct and compliant",
      "Reporting any cash discrepancies to the manager promptly",
      "Ensuring all financial procedures follow company policies and regulatory requirements"
    ]
  },
  {
    title: "Customer Service Representative",
    company: "John Lewis & partnership",
    period: "Sep 2023 – Jan 2026",
    responsibilities: [
      "Ensure that Customer Service processes (Incident handling, issue resolution, service requests, and escalations) continue to operate effectively and meet the needs of the customers.",
      "Proactively monitor customer interactions and service requests in a 24x7 support environment, ensuring effective triage, resolution, and adherence to agreed processes and standards.",
      "Ensure the Customer Support Team meet or exceed all agreed service levels.",
      "Work closely with team leaders and supervisors to produce weekly and monthly performance reports.",
      "Support the development and implementation of customer engagement strategies to align with company requirements and enhance customer satisfaction.",
      "Ensure operational hygiene factors are maintained, such as follow-up on unresolved cases, documentation of customer interactions, and timely resolution of escalated issues.",
      "Identify process deficiencies in customer service workflows and guide the team to implement improvements.",
      "Be an experienced and active member of the customer service team, representing customer interests and service quality standards in key operational meetings.",
      "Collaborate closely with other departments and service areas to ensure seamless customer support and resolution."
    ]
  },
  {
    title: "Delivery & Stock Crew Member",
    company: "McDonald’s",
    period: "Oct 2022 – July 2023",
    responsibilities: [
      "Confidently liaise with external contractors to ensure repairs, maintenance, and stock deliveries are completed efficiently with minimal customer disruption.",
      "Collaborate effectively with the restaurant management team and colleagues to maintain operational efficiency, including timely restocking of inventory.",
      "Uphold ambitious standards of quality, service, and cleanliness both inside and outside the restaurant",
      "Ensure the restaurant’s equipment, building, and stock levels are maintained in prime condition.",
      "Receive, organize, and manage stock deliveries to maintain adequate inventory for uninterrupted operations.",
      "Maintain high energy levels and work productively in a fast-paced, high-energy environment.",
      "Demonstrate enthusiasm for maintaining and improving standards across all areas of the restaurant, including inventory management. Address and resolve maintenance and stock-related issues proactively to support uninterrupted customer service."
    ]
  },
  {
    title: "Assistant Account",
    company: "Ashvin & Associates",
    period: "July 2019 – April 2022",
    responsibilities: [
      "Process accounts payable and receivable, reconcile bank statements, and resolve financial discrepancies.",
      "Help prepare and file tax returns (e.g., GST, TDS, Income Tax) and support tax-related queries and audits.",
      "Assist in budget preparation, financial forecasting, and monitoring/reporting budget variances.",
      "Provide documentation and support during internal and external audits.",
      "Input and maintain accurate financial data in accounting software or spreadsheets.",
      "Ensure compliance with Indian accounting standards, stay updated on changes in laws, and ensure accurate financial reporting.",
      "Communicate with clients, vendors, and stakeholders, and manage financial documents, invoices, and receipts"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="pb-24 md:px-8">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="My professional work history and key achievements."
          className="font-sans"
        >
          Work Experience
        </SectionHeading>

        <div className="max-w-full mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-slate-800 hover:border-indigo-500 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-indigo-500" />
              
              <div className="glass-card p-6 md:p-8 hover-glow">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-indigo-400 font-normal">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-slate-400 text-sm mb-1">
                      <Calendar size={14} className="mr-2" />
                      {exp.period}
                    </div>
                    {exp.location && (
                      <div className="flex items-center text-slate-500 text-xs">
                        <MapPin size={12} className="mr-2" />
                        {exp.location}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">General Responsibility</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-300 text-sm">
                          <CheckCircle2 size={16} className="text-indigo-500 mr-3 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.financial && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Financial Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.financial.map((item, i) => (
                          <li key={i} className="flex items-start text-slate-300 text-sm">
                            <CheckCircle2 size={16} className="text-purple-500 mr-3 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
