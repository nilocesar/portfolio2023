'use client';

import Image from 'next/image';

import { useAbout } from '../../hooks/useAbout';

const About = () => {
  const { borderAnim } = useAbout();

  return (
    <>
      {borderAnim && (
        <>
          <aside className="profile-card shadow-md">
            <div className="profile-bio mx-auto rounded-lg p-2">
              <div className={'w-32 h-32 rounded-full mx-auto avatar'}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <Image
                  className="w-32 h-32 rounded-full mx-auto"
                  src="/image/avatar7.png"
                  alt="Profile picture"
                  width={100}
                  height={100}
                />
              </div>
              <div className={'profile-container'}>
                <h2 className="text-center text-2xl font-semibold mt-3 text-white">Nilo César</h2>
                <p className="text-center text-stone-500 mt-1">FRONT-END</p>
                <div className="flex justify-center mt-5 border-white border-b pb-4">
                  <a
                    href="https://www.linkedin.com/in/nilo-cesar/"
                    target="_blank"
                    className="text-sky-50 hover:text-stone-500 mx-3"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/nilocesar"
                    target="_blank"
                    className="text-sky-50 hover:text-stone-500 mx-3"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="mt-5">
                  {/* <h3 className="text-xl font-semibold text-left text-stone-500">Bio</h3> */}
                  <p className="text-white text-left text-xl">
                    Sou um desenvolvedor front-end, empenhado em criar experiências digitais
                    notáveis. Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas
                    ao domínio dos seus principais frameworks, me capacitam a transformar conceitos
                    criativos em interfaces de usuário envolventes e impactantes.
                  </p>
                  <p className="text-white mt-4 text-left text-xl">
                    Com uma trajetória consistente, engajei-me em diversos projetos, demonstrando
                    ativa participação. Minha dedicação à usabilidade e acessibilidade reflete-se em
                    soluções que não apenas impressionam visualmente, mas também atendem às diversas
                    necessidades e experiências do usuário.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default About;
