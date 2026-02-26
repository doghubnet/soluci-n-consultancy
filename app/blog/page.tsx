import { Card } from '@/components/ui/card';

export default function BlogPage() {
  return (
    <section className='section'>
      <h1 className='font-serif text-5xl text-navy'>Blog</h1>
      <p className='mt-4 max-w-3xl text-slate-600'>Expert scholarship strategy articles for globally ambitious students and families.</p>
      <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {['How to Build a Scholarship-Winning Profile', 'Mistakes That Cost Applicants Full Funding', 'How Parents Can Support Scholarship Success'].map((post) => (
          <Card key={post} className='p-6 text-navy'>{post}</Card>
        ))}
      </div>
    </section>
  );
}
