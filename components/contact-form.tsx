'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  goals: z.string().min(10)
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(() => undefined)} className='space-y-4 rounded-3xl border p-6'>
      <Input placeholder='Full name' {...register('name')} />
      {errors.name && <p className='text-sm text-red-600'>Please enter your name.</p>}
      <Input placeholder='Email address' {...register('email')} />
      {errors.email && <p className='text-sm text-red-600'>Please enter a valid email.</p>}
      <Textarea placeholder='Tell us your scholarship goals' {...register('goals')} />
      {errors.goals && <p className='text-sm text-red-600'>Share at least a short goal summary.</p>}
      <Button type='submit'>Send Inquiry</Button>
      {isSubmitSuccessful && <p className='text-sm text-emerald-600'>Thanks! We will contact you soon.</p>}
      <p className='text-xs text-slate-500'>Not affiliated with any university – professional guidance only.</p>
    </form>
  );
}
