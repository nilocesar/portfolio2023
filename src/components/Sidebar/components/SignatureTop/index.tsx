'use client';

import { useRouter } from 'next/navigation';

// import Link from 'next/link';
import React, { useRef, MutableRefObject } from 'react';

import { motion } from 'framer-motion';

import { DELAY_INIT } from 'utils/constants';

import useSidebar from '../../hooks/useSidebar';

const SignatureTop = () => {
  const router = useRouter();

  const callHome = () => {
    router.push('/');
  };

  const videoRef = useRef<HTMLVideoElement>();
  const { handleOnTimeUpdate, handleOnEnded, logoAnimate, pageCurrent } = useSidebar(
    videoRef,
    DELAY_INIT
  );

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: DELAY_INIT
      }}
      className={'logoBase relative pl-5 pt-10'}
    >
      <motion.div
        className={`logoClose cursor-pointer ${
          pageCurrent === 'home' ? 'pointer-events-none' : ''
        }`}
        onClick={() => {
          callHome();
        }}
        initial={{
          opacity: 0,
          x: '-100px',
          y: '-100px'
        }}
        animate={{
          opacity: 1,
          x: '0',
          y: '0'
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: DELAY_INIT + 1
        }}
      >
        <video
          ref={videoRef as MutableRefObject<HTMLVideoElement>}
          src="./logo.webm"
          muted
          onTimeUpdate={() => handleOnTimeUpdate()}
          onEnded={() => handleOnEnded()}
          className={`logo ${logoAnimate}`}
        />
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          x: '100px',
          y: '100px'
        }}
        animate={{
          opacity: 1,
          x: '0',
          y: '0'
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: DELAY_INIT + 1
        }}
        className={`text-stone-500 font-bold my-0.5`}
      >
        FRONT END DEVELOPER
      </motion.p>
    </motion.div>
  );
};

export default SignatureTop;
