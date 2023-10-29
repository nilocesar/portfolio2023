import { useState, useEffect, MutableRefObject } from "react";

type VideoElement = MutableRefObject<HTMLVideoElement | undefined | null>;

const useSidebar = (videoRef: VideoElement) => {
  const [logoStatus, setLogoStatus] = useState<string>('init');
  const [logoAnimate, setLogoAnimate] = useState<string>('close-to-logo');

  const playInit = (videoRef: VideoElement) => {
    videoRef?.current?.play();
  }

  useEffect(() => {
    if (videoRef?.current) {
      setTimeout(() => {
        playInit(videoRef);
      }, 1000 * 2);
    }
  }, [videoRef]);

  const handleOnTimeUpdate = (videoRef: VideoElement) => {

    const ref = videoRef.current;

    if(ref){
      const progress = (ref.currentTime / ref.duration) * 100 || 0;

      if (progress >= 35 && logoStatus === 'init') {
        ref.pause();
        setLogoStatus('logo');
      }
    }

  };

  const handleVideoRewind = (videoRef: VideoElement) => {

    const ref = videoRef.current;

    if (ref) {
      let intervalRewind = setInterval(function () {
        const progress = (ref.currentTime / ref.duration) * 100 || 0;

        ref.playbackRate = 1.0;
        ref.currentTime += -0.1;

        if (progress < 50) {
          clearInterval(intervalRewind);
          ref.pause();
          setLogoStatus('logo');
        } else {
          ref.currentTime += -0.1;
        }
      }, 30 * 2);
    }
  };

  const logoCloseEvent = (videoRef: VideoElement) => {
    if (logoStatus === 'init') {
      videoRef?.current?.play();
    } else if (logoStatus === 'logo') {
      videoRef?.current?.play();
      setLogoAnimate('logo-to-close');
    } else {
      handleVideoRewind(videoRef);
      setLogoAnimate('close-to-logo');
    }
  };

  const handleOnEnded = (videoRef: VideoElement) => {
    setLogoStatus('close');
  };

  return {
    logoStatus,
    logoAnimate,
    handleOnTimeUpdate,
    logoCloseEvent,
    handleOnEnded
  };
};

export default useSidebar;
