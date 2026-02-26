import * as React from 'react';
import { cn } from '@/lib/utils';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn('min-h-32 w-full rounded-xl border border-slate-300 p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold', className)}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';
