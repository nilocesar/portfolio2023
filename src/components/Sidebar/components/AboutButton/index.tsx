'use client';

import Link from 'next/link';

import { cn } from 'utils/cn';

import { usePageStore } from 'store';

const AboutButton = () => {
  const { pageCurrent } = usePageStore((res) => {
    return res.state.page;
  });

  return (
    <Link
      href="/about"
      className={cn(
        `${pageCurrent === 'about' ? 'opacity-5 pointer-events-none' : ''}`,
        'bg-amber-50 aboutTxt cursor-pointer hover:bg-amber-200 text-xl'
      )}
    >
      ABOUT
    </Link>
  );
};

export default AboutButton;
