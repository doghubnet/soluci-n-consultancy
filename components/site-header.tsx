'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const links = [
  ['Home', '/'],
  ['Programs', '/programs'],
  ['Resources', '/resources'],
  ['Success Stories', '/success-stories'],
  ['Blog', '/blog'],
  ['About', '/about'],
  ['Contact', '/contact']
];

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 border-b bg-white/95 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8'>
        <Link href='/' className='text-xl font-semibold text-navy'>
          Solución Consultancy
        </Link>
        <nav className='hidden items-center gap-6 lg:flex'>
          {links.map(([name, href]) => (
            <motion.div key={href} whileHover={{ scale: 1.03 }} transition={{ duration: 0.18 }} className='relative'>
              <Link href={href} className='text-sm font-semibold text-slate-700 hover:text-navy'>
                {name}
              </Link>
              <motion.span
                className='absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gold'
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </nav>
        <div className='flex items-center gap-3'>
          <Button size='default'>Get Free Guide</Button>
          <span className='rounded-full border px-3 py-2 text-xs font-semibold text-navy'>EN</span>
        </div>
      </div>
    </header>
  );
}
