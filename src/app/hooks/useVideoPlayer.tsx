import { useState, useEffect, MutableRefObject } from "react";

import {
  useReadyEffect,
  usePlayingEffect,
  usePauseEffect,
  useEndEffect
} from "video-react-hooks";

interface PlayerState {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
}

const useVideoPlayer = (videoElement: MutableRefObject<HTMLVideoElement| null >, readVideo:any ) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: true,
  });

  const togglePlay = () => {

    setPlayerState((prevState) => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }));
  };

  useReadyEffect(() => {
    readVideo();
  }, [videoElement]);

  usePlayingEffect(() => {
    //executed when video is playing
  }, [videoElement]);

  useEndEffect(() => {
    //executed when video is paused
  }, [videoElement]);

  useEffect(() => {
    if (playerState.isPlaying) {
      videoElement.current?.play();
    } else {
      videoElement.current?.pause();
    }
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    
    const progress =  (videoElement.current.currentTime / videoElement.current.duration) * 100 || 0;
    setPlayerState((prevState) => ({
      ...prevState,
      progress,
    }));
  };

  const handleVideoProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState((prevState) => ({
      ...prevState,
      progress: manualChange,
    }));
  };

  const handleVideoSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState((prevState) => ({
      ...prevState,
      speed,
    }));
  };

  // const toggleMute = () => {
  //   setPlayerState((prevState) => ({
  //     ...prevState,
  //     isMuted: !prevState.isMuted,
  //   }));
  // };

  // useEffect(() => {
  //   if (playerState.isMuted) {
  //     videoElement.current?.muted = true;
  //   } else {
  //     videoElement.current?.muted = false;
  //   }
  // }, [playerState.isMuted, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed
  };
};

export default useVideoPlayer;
