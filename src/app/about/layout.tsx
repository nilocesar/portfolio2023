import '../../styles/about.scss';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Nilo Cesar',
  description: ''
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <div className="flex-1 overflow-hidden w-full h-full">{children}</div>;
}
