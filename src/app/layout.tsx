import '../styles/globals.scss';
import '../styles/sidebar.scss';

import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import { ReactNode } from 'react';

import { AppWrapper } from 'context';

import { Canvas } from '../components/Canvas';
import { Sidebar } from '../components/Sidebar';
import { useLayout } from '../hooks/useLayout';

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
  const { modelSelect } = useLayout();

  const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const sb_w_randow = randomInteger(17, 35);

  return (
    <html lang="en" className={ralewayFont.className}>
      <body className="bg-white">
        <Canvas />
        <div className={`h-screen flex flex-initial flex-wrap ${modelSelect.base}`}>
          <h1>TesteKKKKK : {sb_w_randow}</h1>
          <AppWrapper>
            <Sidebar modelSelect={modelSelect.sidebar} />
            {children}
          </AppWrapper>
        </div>
      </body>
    </html>
  );
}
