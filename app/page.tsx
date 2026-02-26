'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { BrainCircuit, Compass, FileCheck2, Globe2, GraduationCap, ShieldCheck, Star, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const challengeItems = ['Overwhelming Scholarship Search', 'Rejection After Rejection', 'Confusing Applications', 'Financial Barriers'];

const benefits = [
  { icon: BrainCircuit, text: 'Proven strategy systems grounded in real application outcomes.' },
  { icon: Globe2, text: 'Country-specific guidance for students across 50+ countries.' },
  { icon: GraduationCap, text: 'Scholarship positioning frameworks for top universities worldwide.' },
  { icon: FileCheck2, text: 'Step-by-step application checklists and timeline tools.' },
  { icon: Users2, text: '1:1 expert consulting for essays, profiles, and interviews.' },
  { icon: ShieldCheck, text: 'Professional review standards that reduce costly mistakes.' }
];

const programs = [
  { title: '12-Page Quick Start eBook', price: '$19 USD', image: 'photo-1498243691581-b145c3f54a5a' },
  { title: 'Full 45-Page Scholarship Mastery Guide', price: '$49 USD', image: 'photo-1522202176988-66273c2fd55f' },
  { title: 'Premium Scholarship Bundle', price: '$79 USD', image: 'photo-1521587760476-6c12a4b040da' }
];

const testimonials = [
  {
    name: 'Amina K.',
    country: 'Kenya',
    amount: '$120,000',
    quote: 'Solución Consultancy gave me a world-class strategy and confidence to apply to competitive programs.'
  },
  {
    name: 'Luis R.',
    country: 'Colombia',
    amount: '$98,000',
    quote: 'The practical tools helped me transform my essays and stand out with a clear narrative.'
  },
  {
    name: 'Mei Z.',
    country: 'China',
    amount: '$140,000',
    quote: 'From scholarship search to interview prep, every step was structured and effective.'
  }
];

const faqs = [
  ['What is Solución Consultancy?', 'We are an international scholarship consultancy that helps ambitious students win full scholarships through proven strategies and personalized guidance.'],
  ['Do you guarantee I will get a scholarship?', 'While we cannot guarantee results, our students have a 78% success rate in securing at least partial funding, with many receiving full scholarships.'],
  ['What age groups do you serve?', 'High school seniors, undergraduate, and graduate applicants from anywhere in the world.'],
  ['How does the digital product work?', 'Instant PDF download after purchase. You receive lifetime access and free updates.'],
  ['Can I get a refund?', 'Yes – 30-day happiness guarantee. If you’re not satisfied, we refund 100%.'],
  ['Do you help with essay writing?', 'Yes – our full guides and 1:1 consulting include winning essay frameworks and editing support.'],
  ['Are your services only for specific countries?', 'No – we support students from 50+ countries with country-specific strategies.'],
  ['How long does it take to see results?', 'Most students start seeing application improvements within 2–4 weeks of using our materials.'],
  ['Do you offer 1:1 consulting?', 'Yes – personalized packages start from $299 for strategy calls and full application review.'],
  ['Is my data safe?', '100% secure. We use enterprise-grade encryption and never share your information.']
] as const;

const sectionContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const sectionItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const onLeave = (event: MouseEvent) => {
      if (event.clientY <= 8) setPopupOpen(true);
    };

    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = useMemo(() => testimonials[activeSlide], [activeSlide]);

  return (
    <>
      <section className='relative min-h-screen overflow-hidden'>
        <Image src='https://i.imgur.com/ce6bW1G.jpg' alt='Diverse students celebrating scholarship wins' fill priority className='object-cover' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-white/80' />

        <div className='section relative grid min-h-screen items-center gap-14 lg:grid-cols-2'>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-white'>
            <p className='mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs tracking-[0.2em] text-white'>SOLUCIÓN CONSULTANCY · GLOBAL</p>
            <h1 className='font-serif text-5xl leading-tight md:text-7xl'>Your Global Solution to Winning Full Scholarships</h1>
            <p className='mt-6 max-w-xl text-lg text-slate-100'>Proven strategies + practical tools that help students from 50+ countries secure full scholarships at top universities.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className='max-w-xl rounded-[2rem] bg-white/95 p-8 shadow-2xl lg:p-10'>
            <p className='font-serif text-5xl leading-none tracking-tight text-gold'>hey there!</p>
            <h2 className='mt-2 font-serif text-5xl font-bold leading-tight text-navy'>Welcome to Solución Consultancy.</h2>
            <p className='mt-6 text-lg leading-relaxed text-slate-700'>
              Solución Consultancy exists to turn your scholarship dreams into reality.
              <br />
              <br />
              Rooted in proven strategies and real-world success with students from 50+ countries, we deliver simple, powerful tools that actually work – from finding the right opportunities to crafting winning applications and securing full funding.
              <br />
              <br />
              We meet you exactly where you are and tailor every step to your unique goals and background.
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <Button size='lg'>Download Free Guide</Button>
              <Link href='/programs'>
                <Button size='lg' variant='outline'>Browse Programs</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='section'>
        <h3 className='font-serif text-4xl text-navy'>The Challenge</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {challengeItems.map((item) => (
            <Card key={item} className='p-6 text-lg font-semibold text-navy'>
              {item}
            </Card>
          ))}
        </div>
      </section>

      <section className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>How Solución Consultancy Helps</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {benefits.map(({ icon: Icon, text }) => (
            <Card key={text} className='flex items-start gap-4 p-6'>
              <Icon className='mt-1 h-7 w-7 text-gold' />
              <p className='text-navy'>{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className='section'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='font-serif text-4xl text-navy'>Featured Programs</h3>
          <p className='text-sm text-slate-600'>Stripe / Lemon Squeezy Ready</p>
        </div>
        <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.15 }} variants={sectionContainer} className='mt-8 grid gap-8 lg:grid-cols-3'>
          {programs.map((program) => (
            <motion.div key={program.title} variants={sectionItem}>
              <Card className='overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'>
                <Image src={`https://images.unsplash.com/${program.image}?auto=format&fit=crop&w=1200&q=85`} alt={program.title} width={1200} height={700} className='h-56 w-full object-cover' />
                <div className='p-6'>
                  <Badge className='bg-gold/25 text-navy'>Instant Download</Badge>
                  <h4 className='mt-4 text-2xl font-semibold text-navy'>{program.title}</h4>
                  <ul className='mt-4 space-y-2 text-sm text-slate-600'>
                    <li>• Winning application strategy templates</li>
                    <li>• Country-aware scholarship shortlisting</li>
                    <li>• Action plans you can apply immediately</li>
                  </ul>
                  <div className='mt-5 flex items-center justify-between'>
                    <p className='text-2xl font-bold text-gold'>{program.price}</p>
                    <Badge>Digital Product</Badge>
                  </div>
                  <Button className='mt-5 w-full'>Add to Cart</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Success Stories</h3>
        <div className='mt-8 rounded-3xl border bg-white p-8'>
          <AnimatePresence mode='wait'>
            <motion.div key={activeTestimonial.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <div className='flex items-center gap-4'>
                <div className='grid h-14 w-14 place-items-center rounded-full bg-cream text-navy'>
                  <Star className='h-5 w-5 text-gold' />
                </div>
                <div>
                  <p className='text-xl font-semibold text-navy'>{activeTestimonial.name}</p>
                  <p className='text-sm text-slate-600'>{activeTestimonial.country}</p>
                </div>
              </div>
              <p className='mt-6 max-w-3xl text-lg leading-relaxed text-slate-700'>“{activeTestimonial.quote}”</p>
              <p className='mt-4 font-semibold text-gold'>Scholarship secured: {activeTestimonial.amount}</p>
            </motion.div>
          </AnimatePresence>
          <div className='mt-6 flex gap-2'>
            {testimonials.map((item, index) => (
              <button key={item.name} aria-label={`Go to testimonial ${index + 1}`} className={`h-2.5 w-8 rounded-full ${index === activeSlide ? 'bg-navy' : 'bg-slate-300'}`} onClick={() => setActiveSlide(index)} />
            ))}
          </div>
        </div>
      </section>

      <section className='section'>
        <h3 className='font-serif text-4xl text-navy'>The Science & Strategy Behind Every Win</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {['Evidence-backed planning methods improve execution consistency.', 'Rubric-based positioning aligns student profiles with evaluator criteria.', 'Behavioral accountability systems help students complete stronger applications.'].map((fact) => (
            <Card key={fact} className='p-6 text-navy'>
              {fact}
            </Card>
          ))}
        </div>
      </section>

      <section className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Who This Is For</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {['International students', 'First-generation scholars', 'STEM applicants', 'Parents supporting applicants'].map((target) => (
            <Card key={target} className='p-6 text-navy'>
              <Compass className='mb-4 h-6 w-6 text-gold' />
              {target}
            </Card>
          ))}
        </div>
      </section>

      <section id='faq' className='section'>
        <h3 className='font-serif text-4xl text-navy'>FAQ</h3>
        <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.2 }} variants={sectionContainer}>
          <Accordion type='single' collapsible className='mt-8 rounded-2xl border px-6'>
            {faqs.map(([question, answer], index) => (
              <motion.div variants={sectionItem} key={question}>
                <AccordionItem value={`faq-${index}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </section>

      <section className='section text-center'>
        <h3 className='font-serif text-5xl text-navy'>Ready to secure your scholarship advantage?</h3>
        <p className='mx-auto mt-5 max-w-2xl text-slate-600'>Start with our free Scholarship Success Starter Guide and build a confident path to full funding.</p>
        <div className='mt-8 flex justify-center gap-4'>
          <Button size='lg'>Get Free Guide</Button>
          <Link href='/contact'>
            <Button size='lg' variant='outline'>Book 1:1 Consulting</Button>
          </Link>
        </div>
        <p className='mt-6 text-xs text-slate-500'>Not affiliated with any university – professional guidance only.</p>
      </section>

      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent>
          <h4 className='font-serif text-3xl text-navy'>Before you go, get your free Scholarship Success Starter Guide</h4>
          <p className='mt-3 text-slate-600'>Instant access to a practical 4-page roadmap for winning scholarships.</p>
          <Button className='mt-6' onClick={() => setPopupOpen(false)}>Download Free Guide</Button>
          <p className='mt-4 text-xs text-slate-500'>Not affiliated with any university – professional guidance only.</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
