'use client';

import '../styles/globals.scss';
import '../styles/sidebar.scss';

// import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import { ReactNode } from 'react';

import { AppWrapper } from 'context';
import { useAppContext } from 'context';

import { Canvas } from 'components/Canvas';
import { Sidebar } from 'components/Sidebar';

// export const metadata: Metadata = {
//   title: 'Nilo César',
//   description:
//     'Sou um desenvolvedor front-end, empenhado em criar experiências digitais notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao domínio dos seus principais frameworks, me capacitam a transformar conceitos criativos em interfaces de usuário envolventes e impactantes.'
// };

const ralewayFont = Jura({
  subsets: ['latin'],
  weight: '700'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const Main = () => {
    const { modelSelect } = useAppContext();

    return (
      <>
        <main
          className={`h-screen flex flex-initial flex-wrap ${modelSelect ? modelSelect.base : ''}`}
        >
          <Sidebar modelSelect={modelSelect ? modelSelect.sidebar : ''} />
          {children}
        </main>
      </>
    );
  };

  return (
    <html lang="en" className={ralewayFont.className}>
      <body className="bg-white">
        <AppWrapper>
          <Canvas />
          <Main />
        </AppWrapper>
      </body>
    </html>
  );
}
