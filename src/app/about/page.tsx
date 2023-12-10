'use client';

import Image from 'next/image';

import { useAbout } from '../../hooks/useAbout';


const About = () => {

  const { borderAnim } = useAbout();

  return (
    <>
      {borderAnim && (
        <aside className="profile-card shadow-md">
          <div className="profile-bio mx-auto rounded-lg p-2 lg:p-10">
            <div className={'w-32 h-32 rounded-full mx-auto avatar'}>
              <Image
                className="w-32 h-32 rounded-full mx-auto"
                src="/image/avatar7.png"
                alt="Profile picture"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-center text-2xl font-semibold mt-3 text-white">Nilo César</h2>
            <p className="text-center text-stone-500 mt-1">FRONT END DEVELOPER</p>
            <div className="flex justify-center mt-5 border-white border-b pb-4">
              <a href="#" className="text-sky-50 hover:text-sky-200 mx-3">
                LinkedIn
              </a>
              <a href="#" className="text-sky-50 hover:text-sky-200 mx-3">
                GitHub
              </a>
            </div>
            <div className="mt-5">
              {/* <h3 className="text-xl font-semibold text-left text-stone-500">Bio</h3> */}
              <p className="text-white text-left">
                Sou um desenvolvedor front-end apaixonado, empenhado em criar experiências digitais
                notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao
                domínio dos principais frameworks, me capacitam a transformar conceitos criativos em
                interfaces de usuário envolventes e impactantes.
              </p>
              <p className="text-white mt-4 text-left">
                Com uma trajetória consistente, engajei-me em diversos projetos, demonstrando ativa
                participação. Minha dedicação à usabilidade e acessibilidade reflete-se em soluções
                que não apenas impressionam visualmente, mas também atendem às diversas necessidades
                e experiências do usuário.
              </p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default About;
