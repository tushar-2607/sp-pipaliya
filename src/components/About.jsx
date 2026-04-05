import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  User,
  Quote,
  BarChart3,
  Users,
  GraduationCap,
  Zap,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <BarChart3 className="text-indigo-400" size={24} />,
      title: "Accounting & Finance",
      desc: "Expertise in financial analysis, record management, and accounting principles.",
    },
    {
      icon: <Users className="text-purple-400" size={24} />,
      title: "Customer Excellence",
      desc: "Proven ability to manage daily operations and enhance customer satisfaction.",
    },
    {
      icon: <GraduationCap className="text-pink-400" size={24} />,
      title: "Business Management",
      desc: "Currently pursuing BSc (Hons) with a focus on strategic decision-making.",
    },
    {
      icon: <Zap className="text-blue-400" size={24} />,
      title: "Operational Efficiency",
      desc: "Adept at leveraging software like Excel, QuickBooks, and Xero.",
    },
  ];

  return (
    <section
      id="about"
      className="pb-24 bg-slate-900/50 relative overflow-hidden "
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeading subtitle="A glimpse into my professional journey and aspirations.">
          Professional Summary
        </SectionHeading>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <User size={200} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Quote className="text-indigo-400" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  My Professional Summary
                </h3>
              </div>

              {/* <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light italic mb-8 border-l-4 border-indigo-500 pl-6">
                "Dedicated to driving innovation and delivering exceptional
                results in fast-paced environments."
              </p> */}

              <p className="text-sm md:text-base indent-20 lg:text-[15.5px] text-slate-300 font-normal text-justify">
                Dynamic accounting and finance professional with strong
                expertise in financial analysis, record management, and sales.
                Skilled in using tools like Excel, QuickBooks, and Xero to
                improve efficiency and accuracy. Experienced in customer
                service, daily operations, inventory management, and event
                support across retail and hospitality sectors. Currently
                pursuing a BSc (Hons) in Business Management, with a solid
                foundation in finance and accounting. Multilingual and highly
                adaptable, committed to continuous learning and delivering
                results in fast-paced environments.
              </p>
            </div>
          </motion.div>

          {/* Expertise Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover-glow group"
              >
                <div className="mb-4 p-3 rounded-xl bg-slate-800/50 w-fit group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {pillar.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
