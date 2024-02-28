import Image from 'next/image';

import { usePageStore } from 'store';

import { MotionDiv } from 'components/MotionElement';

import { timeAbout } from 'utils/motionTime';

const About = () => {
  const originPage = usePageStore.getState().state.page.originPage;

  // usePageStore.getState().handlePageCurrent('about');

  usePageStore.setState({ state: { page: { originPage : '', pageCurrent: 'about' } } });
  console.log('dd ' + usePageStore.getState().state.page?.originPage);
  console.log('qq ' + usePageStore.getState().state.page?.pageCurrent);

  const variants = {
    hidden: { display: 'none' },
    visible: { display: 'block' }
  };

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: timeAbout(originPage),
        ease: 'easeInOut',
        duration: 0.5
      }}
      viewport={{ amount: 0 }}
      className="profile-card shadow-md"
    >
      <div className="profile-bio mx-auto rounded-lg p-2 flex flex-1 flex-col">
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
        <div className={'profile-container flex flex-1 flex-col justify-center items-center'}>
          <h2 className="text-center text-2xl font-semibold mt-3 text-amber-400">Nilo César</h2>
          <p className="text-center text-amber-100 mt-1">FRONT-END</p>
          <div className="flex justify-center mt-5 border-amber-200 border-b pb-4 w-full">
            <a
              href="https://www.linkedin.com/in/nilo-cesar/"
              target="_blank"
              className="text-amber-200 hover:text-amber-300 mx-3"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nilocesar"
              target="_blank"
              className="text-amber-200 hover:text-amber-300 mx-3"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="mt-5">
            {/* <h3 className="text-xl font-semibold text-left text-stone-500">Bio</h3> */}
            <p className="text-gray-50 text-left text-xl">
              Sou um desenvolvedor front-end, empenhado em criar experiências digitais notáveis.
              Minhas habilidades especializadas em HTML, CSS e JavaScript, aliadas ao domínio dos
              seus principais frameworks, me capacitam a transformar conceitos criativos em
              interfaces de usuário envolventes e impactantes.
            </p>
            <p className="text-gray-50 mt-4 text-left text-xl">
              Com uma trajetória consistente, engajei-me em diversos projetos, demonstrando ativa
              participação. Minha dedicação à usabilidade e acessibilidade reflete-se em soluções
              que não apenas impressionam visualmente, mas também atendem às diversas necessidades e
              experiências do usuário.
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default About;
