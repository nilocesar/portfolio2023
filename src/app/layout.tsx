import '../styles/globals.scss';
import '../styles/sidebar.scss';

import { Jura } from 'next/font/google';
import { ReactNode } from 'react';

import { AppWrapper } from 'context';

import { Canvas } from '../components/Canvas';
import { Sidebar } from '../components/Sidebar';
import { useLayout } from '../hooks/useLayout';

const ralewayFont = Jura({
  subsets: ['latin'],
  weight: '700'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const { modelSelect } = useLayout();

  return (
    <html lang="en" className={ralewayFont.className}>
      <body className="bg-white">
        <AppWrapper>
          <Canvas />
          <div className={`h-screen flex flex-initial flex-wrap ${modelSelect.base}`}>
            <Sidebar modelSelect={modelSelect.sidebar} />
            {children}
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
