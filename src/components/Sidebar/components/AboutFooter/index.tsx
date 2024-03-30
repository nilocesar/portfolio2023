
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { DELAY_INIT } from 'utils/constants';

import { MotionDiv } from 'components/MotionElement';
import AboutButton from '../AboutButton';

const AboutFooter = () => {
  return (
    <MotionDiv
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: DELAY_INIT + 1.5
      }}
      className={'relative about'}
    >
      <div className="relative w-auto">
        <AboutButton />
        <div className="listSocial flex gap-2 pt-2">
          <a
            href="https://www.linkedin.com/in/nilo-cesar/"
            target="_blank"
            className="text-xl text-amber-50 hover:text-amber-200"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/nilocesar"
            target="_blank"
            className="text-xl text-amber-50 hover:text-amber-200"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AboutFooter;
