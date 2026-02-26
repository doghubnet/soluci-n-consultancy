import { Card } from '@/components/ui/card';

const stories = [
  ['Njeri, Kenya', 'Full tuition + living stipend at a top US university'],
  ['Camila, Brazil', '€70,000 scholarship for STEM graduate program in Europe'],
  ['Rafi, Indonesia', 'Merit-based full scholarship in Canada']
];

export default function SuccessStoriesPage() {
  return (
    <section className='section'>
      <h1 className='font-serif text-5xl text-navy'>Success Stories</h1>
      <p className='mt-4 max-w-3xl text-slate-600'>Real students. Real strategies. Real scholarship outcomes.</p>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {stories.map(([name, result]) => (
          <Card key={name} className='p-6'>
            <h2 className='font-semibold text-navy'>{name}</h2>
            <p className='mt-3 text-sm text-slate-600'>{result}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
