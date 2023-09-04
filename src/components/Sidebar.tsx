'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import useVideoPlayer from 'hooks/useVideoPlayer';


interface Props {
  modelSelect: string;
  className?: string;
}

export function Sidebar({ modelSelect, className = '' }: Props) {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [animInit, setAnima] = useState(true);

  const readVideo = () => {

    setTimeout(() => {
      togglePlay();
    }, 1000 * 2)
    
  }


  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
  } = useVideoPlayer(videoRef, readVideo);

  useEffect(() => {

    if(playerState.progress >= 35 && playerState.isPlaying && animInit){
      togglePlay();
    }

  }, [playerState.progress])
  
 
  return (
    <aside
      className={`bg-stone-950 bg-opacity-90 p-6 ${modelSelect} ${className} opacity-[0] animate-fadeInInit animation-delay-1000`}
    >
      <div className={'relative pt-5'}>
        <video ref={videoRef} src="./logo.webm"  muted onTimeUpdate={handleOnTimeUpdate} onClick={()=>{
          setAnima(false);
          togglePlay();
        }}/>
        <p className={`text-stone-500 font-bold my-0.5 opacity-[0] animate-fadeInInit animation-delay-3000`}>
          FRONT END DEVELOPER
        </p>
      </div>
    </aside>
  );
}
