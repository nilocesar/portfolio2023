'use client';

import { useRouter } from 'next/navigation';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { DELAY_INIT } from 'utils/constants';

// interface Props {
//   className?: string;
// }

const AboutBottom = () => {
  const router = useRouter();

  const callAbout = () => {
    router.push('/about');
  };

  return (
    <motion.div
      initial={{
        opacity: 0
        // x: '200px'
      }}
      animate={{
        opacity: 1
        // x: '0'
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: DELAY_INIT + 1.5
      }}
      className={'relative about'}
    >
      <div className="relative w-auto">
        <button
          type="button"
          onClick={() => callAbout()}
          className="bg-amber-50 aboutTxt cursor-pointer hover:bg-amber-200 text-xl"
        >
          ABOUT
        </button>
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
    </motion.div>
  );
};

export default AboutBottom;
