import '../../styles/about.scss';

import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Sobre: Nilo César',
  description:
    'Sou um desenvolvedor front-end, empenhado em criar experiências digitais notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao domínio dos seus principais frameworks, me capacitam a transformar conceitos criativos em interfaces de usuário envolventes e impactantes.'
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <div className="flex-1 overflow-hidden w-full h-full">{children}</div>;
}
