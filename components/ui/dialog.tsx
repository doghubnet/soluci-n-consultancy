'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export function DialogContent({ children }: { children: React.ReactNode }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className='fixed inset-0 z-50 bg-black/50' />
      <DialogPrimitive.Content className='fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-8'>
        {children}
        <DialogPrimitive.Close className='absolute right-4 top-4 rounded-full p-2 hover:bg-slate-100'>
          <X className='h-4 w-4' />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
