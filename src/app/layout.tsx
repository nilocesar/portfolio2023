import '../styles/globals.scss';
import '../styles/sidebar.scss';

import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import { ReactNode } from 'react';

import fs from 'fs';
import matter from 'gray-matter';

import { Canvas } from 'components/Canvas';
import { Main } from 'components/Main';

import { useBlogStore, InitializeBlogStore, BlogType } from 'store';

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

  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./_posts/project');

  // Get the front matter and slug (the filename without .md) of all files
  const blogs: BlogType[] = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./_posts/project/${filename}`, 'utf8');
    const matterData = matter(file);

    return {
      ...(matterData.data as BlogType),
      slug: filename.slice(0, filename.indexOf('.'))
    };
  });

  console.log(blogs);
  useBlogStore.setState({ blogs: blogs ?? [] });

  return (
    <html lang="en" className={ralewayFont.className}>
      <body className="bg-white">
        <Canvas />
        <InitializeBlogStore blogs={blogs ?? []} />
        <Main currentCache={currentCache}>{children}</Main>
      </body>
    </html>
  );
}
