import React from 'react';
import { motion } from 'framer-motion';

import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export default function SectionHeading({ children, subtitle, className }) {
  return (
    <div className="mb-12 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={twMerge(
          clsx(
            "text-3xl md:text-5xl font-semibold mb-4 text-[#feecd5]",
            className
          )
        )}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="h-1 w-24 gradient-bg mx-auto mt-4 rounded-full"
      />
    </div>
  );
}
