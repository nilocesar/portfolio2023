import '../styles/globals.scss';
import '../styles/sidebar.scss';

import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import { ReactNode } from 'react';

import { getCache } from 'hooks/useCache';

import { Canvas } from 'components/Canvas';
import { Sidebar } from 'components/Sidebar';

import { PageInitializer } from 'utils/PageInitializer';
import { usePageStore } from 'store';

export const metadata: Metadata = {
  title: 'Nilo César',
  description:
    'Sou um desenvolvedor front-end, empenhado em criar experiências digitais notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao domínio dos seus principais frameworks, me capacitam a transformar conceitos criativos em interfaces de usuário envolventes e impactantes.'
};

const ralewayFont = Jura({
  subsets: ['latin'],
  weight: '700'
});

export default function RootLayout({ children }: { children: ReactNode }) {


  return (
    <html lang="en" className={ralewayFont.className}>
      <body className="bg-white">
        <Canvas />
        <main
          className={`h-screen flex flex-initial flex-wrap ${getCache() ? getCache().base : ''}`}
        >
          <Sidebar modelSelect={getCache() ? getCache().sidebar : ''} />
          <PageInitializer
            page={{
              originPage: usePageStore.getState().state.page.originPage,
              pageCurrent: usePageStore.getState().state.page.pageCurrent
            }}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
