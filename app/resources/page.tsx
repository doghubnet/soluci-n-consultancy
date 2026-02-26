import { Card } from '@/components/ui/card';

export default function ResourcesPage() {
  return (
    <section className='section'>
      <h1 className='font-serif text-5xl text-navy'>Resources</h1>
      <p className='mt-4 max-w-3xl text-slate-600'>Explore free and premium scholarship resources designed for international applicants.</p>
      <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {['Scholarship Success Starter Guide', 'Essay Frameworks', 'Application Timeline Planner', 'Interview Preparation Kit', 'Country-Specific Funding Tips', 'Parent Support Guide'].map((item) => (
          <Card key={item} className='p-6 text-navy'>{item}</Card>
        ))}
      </div>
    </section>
  );
}
