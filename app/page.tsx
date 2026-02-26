'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Brain, Globe2, GraduationCap, Handshake, Rocket, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const programs = [
  { title: '12-Page Quick Start eBook', price: '$19 USD' },
  { title: 'Full 45-Page Scholarship Mastery Guide', price: '$49 USD' },
  { title: 'Premium Scholarship Bundle', price: '$79 USD' }
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => e.clientY <= 10 && setOpen(true);
    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, []);

  return (
    <>
      <section className='relative min-h-screen overflow-hidden'>
        <Image src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=90' alt='Diverse students celebrating scholarship success' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-white/80' />
        <div className='section relative grid min-h-screen items-center gap-12 lg:grid-cols-2'>
          <div className='text-white'>
            <h1 className='font-serif text-5xl leading-tight md:text-7xl'>Your Global Solution to Winning Full Scholarships</h1>
            <p className='mt-6 max-w-xl text-lg text-slate-100'>Proven, science-backed strategies + practical real-life application tools that help students secure full scholarships at top universities worldwide.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='max-w-md rounded-3xl bg-white/95 p-8'>
            <p className='font-serif text-5xl leading-none tracking-tight text-gold'>hey there!</p>
            <h2 className='mt-2 font-serif text-5xl font-bold text-navy'>Welcome to Solución Consultancy.</h2>
            <p className='mt-6 text-lg leading-relaxed text-gray-700'>
              Solución Consultancy exists to turn your scholarship dreams into reality.<br /><br />
              Rooted in proven strategies and real-world success with students from 50+ countries, we deliver simple, powerful tools that actually work – from finding the right opportunities to crafting winning applications and securing full funding.<br /><br />
              We meet you exactly where you are and tailor every step to your unique goals and background.
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <Button size='lg'>Download Free Guide</Button>
              <Button size='lg' variant='outline'>Browse Programs</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='section'>
        <h3 className='font-serif text-4xl text-navy'>The Challenge</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>{['Overwhelming Scholarship Search', 'Rejection After Rejection', 'Confusing Applications', 'Financial Barriers'].map((item) => <Card key={item} className='p-6 text-lg font-medium text-navy'>{item}</Card>)}</div>
      </section>

      <section className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>How Solución Consultancy Helps</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {[
            [Brain, 'Science-backed scholarship positioning'],
            [Globe2, 'Global university opportunity mapping'],
            [GraduationCap, 'Essay and profile optimization'],
            [Handshake, '1:1 coaching with experts'],
            [Rocket, 'Deadline and momentum systems'],
            [ShieldCheck, 'Application quality assurance']
          ].map(([Icon, text]) => (
            <Card key={text as string} className='flex items-start gap-4 p-6'>
              <Icon className='h-8 w-8 text-gold' />
              <p className='font-medium text-navy'>{text as string}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className='section'>
        <h3 className='font-serif text-4xl text-navy'>Featured Programs / Shop</h3>
        <div className='mt-8 grid gap-8 lg:grid-cols-3'>
          {programs.map((p, i) => (
            <Card key={p.title} className='overflow-hidden'>
              <Image src={`https://images.unsplash.com/photo-${i === 0 ? '1434030216411-0b793f4b4173' : i === 1 ? '1523240795612-9a054b0db644' : '1529074963764-98f45c47344b'}?auto=format&fit=crop&w=900&q=80`} alt={p.title} width={700} height={400} className='h-52 w-full object-cover' />
              <div className='p-6'>
                <Badge className='bg-gold/20 text-navy'>Instant Download</Badge>
                <h4 className='mt-4 text-xl font-semibold text-navy'>{p.title}</h4>
                <ul className='mt-3 space-y-2 text-sm text-slate-600'><li>• Actionable templates and systems</li><li>• Designed for international applicants</li><li>• Results-focused strategy playbook</li></ul>
                <p className='mt-4 text-2xl font-bold text-gold'>{p.price}</p>
                <Button className='mt-4 w-full'>Add to Cart</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Success Stories</h3>
        <div className='mt-8 grid gap-6 lg:grid-cols-3'>
          {[['Amina · Kenya', '$120,000'], ['Luis · Colombia', '$98,000'], ['Mei · China', '$140,000']].map(([name, amount]) => (
            <Card key={name} className='p-6'><p className='font-semibold text-navy'>{name}</p><p className='mt-2 text-sm text-slate-600'>“The framework made my application clear and compelling.”</p><p className='mt-4 text-gold'>Scholarship Won: {amount}</p></Card>
          ))}
        </div>
      </section>

      <section className='section'>
        <h3 className='font-serif text-4xl text-navy'>The Science & Strategy Behind Every Win</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {['Behavioral science-based goal structures', 'Selection committee rubric reverse-engineering', 'Data-driven personal statement positioning'].map((f) => <Card key={f} className='p-6 text-navy'>{f}</Card>)}
        </div>
      </section>

      <section className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Who This Is For</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {['International students', 'First-generation scholars', 'STEM applicants', 'Graduate & undergraduate candidates'].map((a) => <Card key={a} className='p-6 text-navy'>{a}</Card>)}
        </div>
      </section>

      <section className='section'>
        <h3 className='font-serif text-4xl text-navy'>FAQ</h3>
        <Accordion type='single' collapsible className='mt-8'>
          {[
            ['Do you guarantee scholarships?', 'We provide professional guidance only and cannot guarantee outcomes.'],
            ['Are you affiliated with universities?', 'No. Not affiliated with any university – professional guidance only.'],
            ['Is this for high school and university students?', 'Yes, our frameworks serve both levels globally.'],
            ['Do you support 50+ countries?', 'Yes, we have clients from over 50 countries.'],
            ['Are digital products instant?', 'Yes, downloads are delivered instantly after purchase.'],
            ['Do you offer 1:1 consulting?', 'Yes, we offer premium consulting packages.'],
            ['What payment gateways are supported?', 'Stripe and Lemon Squeezy setups are supported.'],
            ['Can parents join consultations?', 'Absolutely, parents are welcome in planning sessions.']
          ].map(([q, a], i) => (
            <AccordionItem key={q} value={`i-${i}`}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className='section text-center'>
        <h3 className='font-serif text-5xl text-navy'>Ready to win your full scholarship?</h3>
        <p className='mx-auto mt-4 max-w-2xl text-slate-600'>Join thousands of ambitious students who use our elegant, practical and proven roadmap to reach world-class universities.</p>
        <div className='mt-8 flex justify-center gap-4'><Button size='lg'>Get Free Guide</Button><Link href='/programs'><Button size='lg' variant='outline'>Explore Programs</Button></Link></div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <h4 className='font-serif text-3xl text-navy'>Before you go — claim your free Scholarship Success Starter Guide</h4>
          <p className='mt-3 text-slate-600'>Download the 4-page PDF and start your winning strategy now.</p>
          <div className='mt-6'><Button onClick={() => setOpen(false)}>Download Free Guide</Button></div>
        </DialogContent>
      </Dialog>
    </>
  );
}
