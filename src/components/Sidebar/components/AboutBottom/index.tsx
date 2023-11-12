'use client';

// import Link from 'next/link';

import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { DELAY_INIT } from 'utils/constants';

interface Props {
  className?: string;
}

const AboutBottom = ({ className = '' }: Props) => {
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
        <button className="bg-stone-500 aboutTxt cursor-pointer hover:bg-stone-800 hover:text-orange-50 text-xl">
          ABOUT
        </button>
        <div className="listSocial flex gap-2 pt-2">
          <button className="text-xl text-stone-500 hover:text-orange-50">
            <BsLinkedin />
          </button>
          <button className="text-xl text-stone-500 hover:text-orange-50">
            <BsGithub />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutBottom;
