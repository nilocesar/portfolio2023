import { Metadata } from 'next';

import { useBlogStore } from 'store';

import ProjectContainer from './ProjectContainer';

// export const metadata: Metadata = {
//   title: 'Nilo César | Projetos',
//   description:
//     'Sou um desenvolvedor front-end, empenhado em criar experiências digitais notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao domínio dos seus principais frameworks, me capacitam a transformar conceitos criativos em interfaces de usuário envolventes e impactantes.'
// };

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const about = useBlogStore.getState().about;

  return {
    title: about.title + " | Projetos",
    description: about.description
  };
}


export default function Project() {
  return (
    <>
      <ProjectContainer />
    </>
  );
}
