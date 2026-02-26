import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
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

        <div className='mt-10 flex flex-wrap items-center gap-4 text-navy'>
          <a href='https://www.instagram.com/aggregateconsultant' target='_blank' rel='noreferrer noopener' className='transition hover:text-gold' aria-label='Instagram'>
            <Instagram />
          </a>
          <a href='https://www.linkedin.com/in/gediyon-adamu-yeshitila-080b90338' target='_blank' rel='noreferrer noopener' className='transition hover:text-gold' aria-label='LinkedIn'>
            <Linkedin />
          </a>
          <a href='https://www.facebook.com/gediyonadamusi' target='_blank' rel='noreferrer noopener' className='transition hover:text-gold' aria-label='Facebook'>
            <Facebook />
          </a>
          <a href='https://t.me/scholartransfer' target='_blank' rel='noreferrer noopener' className='transition hover:text-gold' aria-label='Telegram'>
            <MessageCircle />
          </a>
          <a href='https://x.com/gediyon_adamu' target='_blank' rel='noreferrer noopener' className='transition hover:text-gold' aria-label='X'>
            <Twitter />
          </a>
          <a href='mailto:scelta.infinity@gmail.com' className='inline-flex items-center gap-2 transition hover:text-gold'>
            <Mail className='h-5 w-5' />
            <span className='text-sm'>scelta.infinity@gmail.com</span>
          </a>
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
