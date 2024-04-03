import { ReactNode } from 'react';

import { Sidebar } from 'components/Sidebar';

import { getCache } from 'hooks/useCache';

export const dynamic = 'force-dynamic';

export function Main({ children }: { children: ReactNode }) {
  return (
    <main className={`h-screen flex flex-initial flex-wrap ${getCache() ? getCache().base : ''}`}>
      <Sidebar modelSelect={getCache() ? getCache().sidebar : ''} />
      {children}
    </main>
  );
}
