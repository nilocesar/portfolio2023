'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, MutableRefObject } from 'react';

import { DELAY_INIT } from 'utils/constants';

import useSidebar from '../../hooks/useSidebar';
import { MotionDiv, MotionP } from 'components/MotionElement';

const SignatureTop = () => {

  const isIOS = false;
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
        delay: DELAY_INIT
      }}
      className={'logoBase relative pl-5 pt-10'}
    >
      <MotionDiv
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
        {isIOS ? (
          pageCurrent === 'home' ? (
            <Image
              src={`/image/logo.png`}
              alt=""
              fill
              className={`cursor-pointer object-contain object-left-top animate-fadeInInit`}
            />
          ) : (
            <Image
              src={`/image/close.png`}
              alt=""
              fill
              className={`cursor-pointer object-contain object-left-top animate-fadeInInit`}
            />
          )
        ) : (
          <video
            ref={videoRef as MutableRefObject<HTMLVideoElement>}
            src="./logo.webm"
            muted
            onTimeUpdate={() => handleOnTimeUpdate()}
            onEnded={() => handleOnEnded()}
            className={`logo ${logoAnimate}`}
          />
        )}
      </MotionDiv>

      <MotionP
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
        className={`text-amber-50 font-bold my-0.5`}
      >
        FRONT-END
      </MotionP>
    </MotionDiv>
  );
};

export default SignatureTop;
