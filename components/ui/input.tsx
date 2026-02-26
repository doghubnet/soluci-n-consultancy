import * as React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn('h-11 w-full rounded-xl border border-slate-300 px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold', className)}
      {...props}
    />
  )
);
Input.displayName = 'Input';
