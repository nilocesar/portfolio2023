import '../styles/globals.scss';
import '../styles/sidebar.scss';

import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import { ReactNode } from 'react';

import { Canvas } from 'components/Canvas';
// import { Sidebar } from 'components/Sidebar';
import { Main } from 'components/Main';

// import { getCache } from 'hooks/useCache';

export const metadata: Metadata = {
  title: 'Nilo César',
  description:
    'Sou um desenvolvedor front-end, empenhado em criar experiências digitais notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao domínio dos seus principais frameworks, me capacitam a transformar conceitos criativos em interfaces de usuário envolventes e impactantes.'
};

const ralewayFont = Jura({
  subsets: ['latin'],
  weight: '700'
});

// export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={ralewayFont.className}>
      <body className="bg-white">
        <Canvas />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
