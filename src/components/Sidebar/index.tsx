'use client';

// import styles from '../../styles/sidebar.scss';

import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import Link from 'next/link';

import useSidebar from './hooks/useSidebar';

interface Props {
  modelSelect: string;
  className?: string;
}

export function Sidebar({ modelSelect, className = '' }: Props) {

  const videoRef = useRef<HTMLVideoElement>();
  const { logoCloseEvent, handleOnTimeUpdate, handleOnEnded, logoAnimate } = useSidebar(videoRef);


  return (
    <aside
      className={`bg-stone-950 bg-opacity-90 ${modelSelect} ${className}
      opacity-[0] animate-fadeInInit animation-delay-1000`}
    >
      <div className={'logoBase relative pl-5 pt-10'}>
        <div
          className={`logoClose cursor-pointer`}
          onClick={() => {
            logoCloseEvent(videoRef);
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
        </div>

        <p
          className={`text-stone-500 font-bold my-0.5 opacity-[0] animate-fadeInInit animation-delay-3000`}
        >
          FRONT END DEVELOPER
        </p>
      </div>

      <div className={'relative about'}>
        <div className="bg-stone-500 aboutTxt">ABOUT</div>
      </div>
    </aside>
  );
}
