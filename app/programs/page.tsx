import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const data = [
  { name: '12-Page Quick Start eBook', price: '$19 USD', details: 'Fast-start roadmap to find, shortlist, and apply with confidence.' },
  { name: 'Full 45-Page Scholarship Mastery Guide', price: '$49 USD', details: 'Complete strategic system for essays, positioning, timelines, and submissions.' },
  { name: 'Premium Scholarship Bundle', price: '$79 USD', details: 'All guides + bonus templates + interview prep resources.' }
];

export default function ProgramsPage() {
  return (
    <section className='section'>
      <h1 className='font-serif text-5xl text-navy'>Programs</h1>
      <p className='mt-4 max-w-3xl text-slate-600'>Premium scholarship tools and consulting built for ambitious students worldwide.</p>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {data.map((item) => (
          <Card key={item.name} className='p-6'>
            <Badge>Instant Download</Badge>
            <h2 className='mt-4 text-xl font-semibold text-navy'>{item.name}</h2>
            <p className='mt-3 text-sm text-slate-600'>{item.details}</p>
            <p className='mt-5 text-2xl font-bold text-gold'>{item.price}</p>
            <Button className='mt-5 w-full'>Add to Cart</Button>
          </Card>
        ))}
      </div>
      <p className='mt-8 text-xs text-slate-500'>Not affiliated with any university – professional guidance only.</p>
    </section>
  );
}
