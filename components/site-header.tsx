import Link from 'next/link';
import { Button } from '@/components/ui/button';

const links = [
  ['Home', '/'],
  ['Programs', '/programs'],
  ['Resources', '/resources'],
  ['Success Stories', '/success-stories'],
  ['Blog', '/blog'],
  ['About', '/about'],
  ['Contact', '/contact']
];

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 border-b bg-white/95 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8'>
        <Link href='/' className='text-xl font-semibold text-navy'>
          Solución Consultancy
        </Link>
        <nav className='hidden items-center gap-6 lg:flex'>
          {links.map(([name, href]) => (
            <Link key={href} href={href} className='text-sm text-slate-700 hover:text-navy'>
              {name}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-3'>
          <Button size='default'>Get Free Guide</Button>
          <span className='rounded-full border px-3 py-2 text-xs font-semibold text-navy'>EN</span>
        </div>
      </div>
    </header>
  );
}
