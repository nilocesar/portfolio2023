import '../styles/globals.scss';
import '../styles/sidebar.scss';

import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import { ReactNode } from 'react';

import { Canvas } from 'components/Canvas';
import { Main } from 'components/Main';

import { mdBlogs } from 'utils/md';

import { useBlogStore, InitializeBlogStore } from 'store';

import { getCurrentCache } from 'hooks/useCache';

export const metadata: Metadata = {
  title: 'Nilo César',
  description:
    'Sou um desenvolvedor front-end, empenhado em criar experiências digitais notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao domínio dos seus principais frameworks, me capacitam a transformar conceitos criativos em interfaces de usuário envolventes e impactantes.'
};

const ralewayFont = Jura({
  subsets: ['latin'],
  weight: '700'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const currentCache = await getCurrentCache();

  // Get the front matter and slug (the filename without .md) of all files
  const { blogs, about } = mdBlogs();
  useBlogStore.setState({ blogs: blogs ?? [], about: about ?? {} });

  return (
    <html lang="en" className={`${ralewayFont.className} antialiased`}>
      <body className="bg-white antialiased">
        <Canvas />
        <InitializeBlogStore blogs={blogs ?? []} about={about ?? {}} />
        <Main currentCache={currentCache}>{children}</Main>
      </body>
    </html>
  );
}
