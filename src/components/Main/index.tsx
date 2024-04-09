'use client';

import { ReactNode } from 'react';

import { Sidebar } from 'components/Sidebar';

import { modelScreen, dataObj } from 'utils/modelScreen';

export function Main({ currentCache, children }: { currentCache: dataObj; children: ReactNode }) {
  const { modelSelect } = modelScreen(currentCache);
  return (
    <main className={`h-screen flex flex-initial flex-wrap ${modelSelect ? modelSelect.base : ''}`}>
      <Sidebar modelSelect={modelSelect ? modelSelect.sidebar : ''} />
      {children}
    </main>
  );
}
