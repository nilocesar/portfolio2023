import '../../styles/about.scss';

import { ReactNode } from 'react';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <div className="flex-1 overflow-hidden w-full h-full">{children}</div>;
}
