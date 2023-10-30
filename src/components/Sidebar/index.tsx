'use client';


import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import Link from 'next/link';

import { BsLinkedin , BsGithub } from 'react-icons/bs';

import { motion } from 'framer-motion';

import useSidebar from './hooks/useSidebar';

interface Props {
  modelSelect: string;
  className?: string;
}

export function Sidebar({ modelSelect, className = '' }: Props) {

  const delayInit = 2;
  const videoRef = useRef<HTMLVideoElement>();
  const { logoCloseEvent, handleOnTimeUpdate, handleOnEnded, logoAnimate } = useSidebar(
    videoRef,
    delayInit
  );


  return (
    <aside
      className={`bg-stone-950 bg-opacity-90 ${modelSelect} ${className}
      opacity-[0] animate-fadeInInit animation-delay-1000 overflow-hidden`}
    >
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
          delay: delayInit
        }}
        className={'logoBase relative pl-5 pt-10'}
      >
        <motion.div
          className={`logoClose cursor-pointer`}
          onClick={() => {
            logoCloseEvent(videoRef);
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
            delay: delayInit + 1
          }}
        >
          <video
            ref={videoRef as MutableRefObject<HTMLVideoElement>}
            src="./logo.webm"
            muted
            onTimeUpdate={() => handleOnTimeUpdate(videoRef)}
            onEnded={() => handleOnEnded(videoRef)}
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
            delay: delayInit + 1
          }}
          className={`text-stone-500 font-bold my-0.5`}
        >
          FRONT END DEVELOPER
        </motion.p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          // x: '200px'
        }}
        animate={{
          opacity: 1,
          // x: '0'
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: delayInit + 1.5
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
    </aside>
  );
}
