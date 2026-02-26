import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <section className='section'>
      <h1 className='font-serif text-5xl text-navy'>Contact</h1>
      <p className='mt-4 max-w-3xl text-slate-600'>Speak with our scholarship strategists for tailored support.</p>
      <div className='mt-8 max-w-2xl'>
        <ContactForm />
      </div>
    </section>
  );
}
