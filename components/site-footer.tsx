'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const columns: Record<string, Array<{ label: string; href: string }>> = {
  Programs: [
    { label: 'Quick Start eBook', href: '/programs' },
    { label: 'Scholarship Mastery Guide', href: '/programs' },
    { label: 'Premium Scholarship Bundle', href: '/programs' },
    { label: '1:1 Consulting', href: '/contact' }
  ],
  Resources: [
    { label: 'Free Starter Guide', href: '/resources' },
    { label: 'Blog', href: '/blog' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'FAQ', href: '/#faq' }
  ],
  Support: [
    { label: 'Contact', href: '/contact' },
    { label: 'Help Center', href: '/resources' },
    { label: 'Consultation Booking', href: '/contact' },
    { label: 'Email Support', href: '/contact' }
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/resources' },
    { label: 'Terms of Use', href: '/resources' },
    { label: 'Refund Policy', href: '/resources' },
    { label: 'Disclaimer', href: '/about' }
  ]
};

const formSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Please enter a valid email.')
});

type FormValues = z.infer<typeof formSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const childVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

export function SiteFooter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
    clearErrors
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });
  const [success, setSuccess] = useState(false);

  async function onSubmit(values: FormValues) {
    setSuccess(false);
    clearErrors('root');
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    if (!res.ok) {
      setError('root', { message: 'Something went wrong. Please try again.' });
      return;
    }

    setSuccess(true);
    reset();
  }

  return (
    <footer className='bg-cream'>
      <div className='section'>
        <div className='grid gap-10 lg:grid-cols-[1.7fr_1fr]'>
          <div>
            <p className='font-serif text-4xl text-navy'>on Instagram</p>
            <p className='mt-2 text-slate-600'>Join our community of over 15,000 ambitious students @SolucionConsultancy</p>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onSubmit={handleSubmit(onSubmit)}
              className='mt-6 max-w-xl space-y-3'
            >
              <div className='grid gap-3 sm:grid-cols-[1fr_1fr_auto]'>
                <motion.div whileHover={{ y: -2, scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <Input placeholder='Your name' aria-label='Name' {...register('name')} />
                </motion.div>
                <motion.div whileHover={{ y: -2, scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <Input placeholder='Email address' aria-label='Email address' {...register('email')} />
                </motion.div>
                <motion.div whileHover={{ y: -2, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Joining...' : 'Join'}</Button>
                </motion.div>
              </div>
              {(errors.name || errors.email || errors.root) && (
                <p className='text-sm text-red-600'>{errors.name?.message || errors.email?.message || errors.root?.message}</p>
              )}
              {success && <p className='text-sm text-emerald-700'>Thank you! Check your inbox soon.</p>}
            </motion.form>
          </div>

          <div className='grid place-items-center'>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(212,175,55,0.35)' }}
              transition={{ duration: 0.25 }}
              className='grid h-44 w-44 place-items-center rounded-full border-4 border-gold p-6 text-center text-sm tracking-wide text-navy'
            >
              <strong>RECLAIM YOUR GLOBAL FUTURE</strong>
            </motion.div>
          </div>
        </div>

        <div className='mt-10 flex flex-wrap items-center gap-4 text-navy'>
          <motion.a href='https://www.instagram.com/aggregateconsultant' target='_blank' rel='noreferrer noopener' whileHover={{ y: -3, scale: 1.08 }} transition={{ duration: 0.2 }} className='transition hover:text-gold' aria-label='Instagram'>
            <Instagram className='h-5 w-5' />
          </motion.a>
          <motion.a href='https://www.linkedin.com/in/gediyon-adamu-yeshitila-080b90338' target='_blank' rel='noreferrer noopener' whileHover={{ y: -3, scale: 1.08 }} transition={{ duration: 0.2 }} className='transition hover:text-gold' aria-label='LinkedIn'>
            <Linkedin className='h-5 w-5' />
          </motion.a>
          <motion.a href='https://www.facebook.com/gediyonadamusi' target='_blank' rel='noreferrer noopener' whileHover={{ y: -3, scale: 1.08 }} transition={{ duration: 0.2 }} className='transition hover:text-gold' aria-label='Facebook'>
            <Facebook className='h-5 w-5' />
          </motion.a>
          <motion.a href='https://t.me/scholartransfer' target='_blank' rel='noreferrer noopener' whileHover={{ y: -3, scale: 1.08 }} transition={{ duration: 0.2 }} className='transition hover:text-gold' aria-label='Telegram'>
            <MessageCircle className='h-5 w-5' />
          </motion.a>
          <motion.a href='https://x.com/gediyon_adamu' target='_blank' rel='noreferrer noopener' whileHover={{ y: -3, scale: 1.08 }} transition={{ duration: 0.2 }} className='transition hover:text-gold' aria-label='X'>
            <Twitter className='h-5 w-5' />
          </motion.a>
          <motion.a href='mailto:scelta.infinity@gmail.com' whileHover={{ y: -3, scale: 1.03 }} transition={{ duration: 0.2 }} className='inline-flex items-center gap-2 transition hover:text-gold'>
            <Mail className='h-5 w-5' />
            <span className='text-sm'><strong>scelta.infinity@gmail.com</strong></span>
          </motion.a>
        </div>

        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className='mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'
        >
          {Object.entries(columns).map(([title, links]) => (
            <motion.div key={title} variants={childVariants}>
              <h4 className='font-semibold text-navy'>{title}</h4>
              <ul className='mt-3 space-y-2 text-sm text-slate-600'>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='hover:text-navy'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className='mt-12 flex flex-col gap-3 border-t border-slate-300 pt-6 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between'>
          <p>© 2026 Solución Consultancy. All rights reserved.</p>
          <p>Evidence-Based · 50+ Countries · Secure Payments</p>
        </div>
      </div>
    </footer>
  );
}
