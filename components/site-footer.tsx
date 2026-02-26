import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Music2, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const columns = {
  Programs: ['Quick Start eBook', 'Scholarship Mastery Guide', 'Premium Scholarship Bundle', '1:1 Consulting'],
  Resources: ['Free Starter Guide', 'Blog', 'Success Stories', 'FAQ'],
  Support: ['Contact', 'Help Center', 'Consultation Booking', 'Email Support'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Refund Policy', 'Disclaimer']
};

export function SiteFooter() {
  return (
    <footer className='bg-cream'>
      <div className='section'>
        <div className='grid gap-10 lg:grid-cols-[1.7fr_1fr]'>
          <div>
            <p className='font-serif text-4xl text-navy'>on Instagram</p>
            <p className='mt-2 text-slate-600'>Join our community of over 15,000 ambitious students @SolucionConsultancy</p>
            <div className='mt-6 flex max-w-xl flex-col gap-3 sm:flex-row'>
              <Input placeholder='Join our email list – I’ll send free scholarship tips straight to your inbox.' aria-label='Email address' />
              <Button>Join</Button>
            </div>
          </div>

          <div className='grid place-items-center'>
            <div className='grid h-44 w-44 place-items-center rounded-full border-4 border-gold p-6 text-center text-sm font-semibold tracking-wide text-navy'>
              RECLAIM YOUR GLOBAL FUTURE
            </div>
          </div>
        </div>

        <div className='mt-10 flex gap-4 text-navy'>
          <Instagram />
          <Linkedin />
          <Youtube />
          <Music2 />
          <Facebook />
        </div>

        <div className='mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h4 className='font-semibold text-navy'>{title}</h4>
              <ul className='mt-3 space-y-2 text-sm text-slate-600'>
                {links.map((link) => (
                  <li key={link}>
                    <Link href='/' className='hover:text-navy'>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col gap-3 border-t border-slate-300 pt-6 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between'>
          <p>© 2026 Solución Consultancy. All rights reserved.</p>
          <p>Evidence-Based · 50+ Countries · Secure Payments</p>
        </div>
      </div>
    </footer>
  );
}
