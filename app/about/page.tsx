'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-white to-cream/60'>
      <div className='pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl' />
      <div className='pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl' />

      <div className='section relative'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className='max-w-5xl font-serif text-5xl leading-tight text-navy lg:text-6xl'
        >
          Your Trusted Partner for International Education and Global Career Opportunities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='mt-8 max-w-4xl text-lg leading-relaxed text-slate-700'
        >
          Solución Consultancy empowers ambitious students with proven scholarship strategy, practical planning tools, and personalized mentorship.
          We support learners from 50+ countries to navigate applications, funding pathways, and global academic transitions with confidence, clarity,
          and a long-term success mindset.
        </motion.p>

        <p className='mt-8 text-xs text-slate-500'>Not affiliated with any university – professional guidance only.</p>
      </div>
    </section>
  );
}
