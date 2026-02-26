'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  Clock3,
  Compass,
  FileCheck2,
  Globe2,
  GraduationCap,
  Hourglass,
  Send,
  ShieldCheck,
  Star,
  Trophy,
  Users,
  Users2
} from 'lucide-react';
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

const processSteps = [
  {
    icon: ClipboardCheck,
    title: 'Consultation & Assessment',
    description: 'We evaluate your academic profile, goals, and country pathway to identify your best-fit scholarship opportunities.'
  },
  {
    icon: Compass,
    title: 'Personalized Planning & Application Strategy',
    description: 'You receive a tailored timeline, essay plan, and application strategy designed for your strongest outcomes.'
  },
  {
    icon: Send,
    title: 'Application Submission & Visa Support',
    description: 'We guide documentation, submission quality checks, and visa readiness for a smooth transition abroad.'
  },
  {
    icon: Trophy,
    title: 'Ongoing Mentorship & Success Tracking',
    description: 'Continuous support ensures momentum from admission offers to enrollment and long-term academic success.'
  }
];

const stats = [
  { icon: Clock3, value: '4+ Years', label: 'guiding students to global education success' },
  { icon: Users, value: '120+', label: 'Students assisted in achieving their international education goals' },
  { icon: Hourglass, value: '1.8K+', label: 'Hours dedicated to student placement and support' },
  { icon: BarChart3, value: '98.9%', label: 'Student satisfaction rate with our services' }
];

const newsItems = [
  'Fully Funded USA Scholarship – Deadline March 15',
  'New UK University Partnership Announced',
  'Germany STEM Opportunity Update for International Applicants',
  'Graduate Fellowship Openings for Fall Intake'
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

const sectionContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const sectionItem = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } };

function MotionSection({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

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
      <section className='relative min-h-screen overflow-hidden bg-black'>
        <video autoPlay muted loop playsInline className='absolute inset-0 h-full w-full object-contain bg-black'>
          <source src='https://i.imgur.com/s7wLJ5o.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/45' />

        <div className='section relative flex min-h-screen items-center'>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='max-w-3xl text-white'>
            <p className='mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs tracking-[0.2em] text-white'>SOLUCIÓN CONSULTANCY · GLOBAL</p>
            <h1 className='font-serif text-5xl leading-tight md:text-7xl'>Your Global Solution to Winning Full Scholarships</h1>
            <p className='mt-6 max-w-2xl text-lg text-slate-100'>
              Proven strategies + practical tools that help students from 50+ countries secure full scholarships at top universities.
            </p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }} className='mt-10 flex flex-wrap gap-4'>
              <Button size='lg'>Download Free Guide</Button>
              <Link href='/programs'>
                <Button size='lg' variant='outline'>Browse Programs</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MotionSection id='process' className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Your Scholarship Journey – Step by Step</h3>
        <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.2 }} variants={sectionContainer} className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {processSteps.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={sectionItem} whileHover={{ y: -6, scale: 1.03 }}>
              <Card className='h-full bg-[#10293f] p-6 text-white shadow-lg'>
                <Icon className='h-7 w-7 text-gold' />
                <h4 className='mt-4 text-lg font-semibold'>{title}</h4>
                <p className='mt-3 text-sm text-slate-200'>{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>

      <MotionSection className='section'>
        <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.2 }} variants={sectionContainer} className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div key={value} variants={sectionItem} whileHover={{ scale: 1.03 }}>
              <Card className='p-6'>
                <Icon className='h-7 w-7 text-gold' />
                <p className='mt-4 text-3xl font-bold text-navy'>{value}</p>
                <p className='mt-2 text-sm text-slate-600'>{label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>

      <MotionSection className='section'>
        <h3 className='font-serif text-4xl text-navy'>The Challenge</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {challengeItems.map((item) => (
            <Card key={item} className='p-6 text-lg font-semibold text-navy'>{item}</Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>How Solución Consultancy Helps</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {benefits.map(({ icon: Icon, text }) => (
            <Card key={text} className='flex items-start gap-4 p-6'>
              <Icon className='mt-1 h-7 w-7 text-gold' />
              <p className='text-navy'>{text}</p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className='section'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='font-serif text-4xl text-navy'>Featured Programs</h3>
          <p className='text-sm text-slate-600'>Stripe / Lemon Squeezy Ready</p>
        </div>
        <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.15 }} variants={sectionContainer} className='mt-8 grid gap-8 lg:grid-cols-3'>
          {programs.map((program) => (
            <motion.div key={program.title} variants={sectionItem} whileHover={{ y: -6, scale: 1.03 }}>
              <Card className='overflow-hidden transition-shadow duration-300 hover:shadow-xl'>
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
      </MotionSection>

      <MotionSection className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Latest News & Opportunities</h3>
        <div className='mt-8 grid gap-6 lg:grid-cols-4'>
          {newsItems.map((item) => (
            <motion.div key={item} whileHover={{ y: -4, scale: 1.02 }}>
              <Card className='h-full p-6'>
                <p className='font-semibold text-navy'>{item}</p>
                <Button variant='ghost' className='mt-4 px-0'>Read more</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Success Stories</h3>
        <div className='mt-8 rounded-3xl border bg-white p-8'>
          <AnimatePresence mode='wait'>
            <motion.div key={activeTestimonial.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <div className='flex items-center gap-4'>
                <div className='grid h-14 w-14 place-items-center rounded-full bg-cream text-navy'><Star className='h-5 w-5 text-gold' /></div>
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
      </MotionSection>

      <MotionSection className='section'>
        <h3 className='font-serif text-4xl text-navy'>The Science & Strategy Behind Every Win</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {['Evidence-backed planning methods improve execution consistency.', 'Rubric-based positioning aligns student profiles with evaluator criteria.', 'Behavioral accountability systems help students complete stronger applications.'].map((fact) => (
            <Card key={fact} className='p-6 text-navy'>{fact}</Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className='section bg-slate-50'>
        <h3 className='font-serif text-4xl text-navy'>Who This Is For</h3>
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {['International students', 'First-generation scholars', 'STEM applicants', 'Parents supporting applicants'].map((target) => (
            <Card key={target} className='p-6 text-navy'><Compass className='mb-4 h-6 w-6 text-gold' />{target}</Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection id='faq' className='section'>
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
      </MotionSection>

      <MotionSection className='section text-center'>
        <h3 className='font-serif text-5xl text-navy'>Ready to secure your scholarship advantage?</h3>
        <p className='mx-auto mt-5 max-w-2xl text-slate-600'>Start with our free Scholarship Success Starter Guide and build a confident path to full funding.</p>
        <div className='mt-8 flex justify-center gap-4'>
          <Button size='lg'>Get Free Guide</Button>
          <Link href='/contact'><Button size='lg' variant='outline'>Book 1:1 Consulting</Button></Link>
        </div>
        <p className='mt-6 text-xs text-slate-500'>Not affiliated with any university – professional guidance only.</p>
      </MotionSection>

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
