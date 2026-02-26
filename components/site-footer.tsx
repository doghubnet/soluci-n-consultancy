import { Instagram, Linkedin, Youtube, Music2, Facebook } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SiteFooter() {
  return (
    <footer className='bg-cream'>
      <div className='section'>
        <div className='grid gap-10 lg:grid-cols-[2fr_1fr]'>
          <div>
            <p className='font-serif text-4xl text-navy'>on Instagram</p>
            <p className='mt-3 text-slate-600'>Join our community of over 15,000 ambitious students @SolucionConsultancy</p>
            <div className='mt-6 flex max-w-lg gap-3'>
              <Input placeholder='Join our email list – I’ll send free scholarship tips straight to your inbox.' />
              <Button>Join</Button>
            </div>
          </div>
          <div className='grid place-items-center'>
            <div className='grid h-44 w-44 place-items-center rounded-full border-4 border-gold text-center text-sm font-semibold text-navy'>
              RECLAIM YOUR GLOBAL FUTURE
            </div>
          </div>
        </div>
        <div className='mt-10 flex gap-4 text-navy'>
          <Instagram /><Linkedin /><Youtube /><Music2 /><Facebook />
        </div>
        <div className='mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {['Programs', 'Resources', 'Support', 'Legal'].map((col) => (
            <div key={col}>
              <h4 className='font-semibold text-navy'>{col}</h4>
              <ul className='mt-3 space-y-2 text-sm text-slate-600'>
                <li>Overview</li><li>Pricing</li><li>FAQ</li>
              </ul>
            </div>
          ))}
        </div>
        <div className='mt-12 flex flex-col gap-3 border-t pt-6 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between'>
          <p>© 2026 Solución Consultancy. All rights reserved.</p>
          <p>Evidence-Based · 50+ Countries · Secure Payments</p>
        </div>
      </div>
    </footer>
  );
}
