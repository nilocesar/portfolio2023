import { useState, useEffect, MutableRefObject } from 'react';

import { useAppContext } from 'context';

type VideoElement = MutableRefObject<HTMLVideoElement | undefined | null>;

const useSidebar = (videoRef: VideoElement, DELAY_INIT: number) => {
  const [logoStatus, setLogoStatus] = useState<string>('init');
  const [logoAnimate, setLogoAnimate] = useState<string>('close-to-logo');

  const { pageCurrent } = useAppContext();

  useEffect(() => {
    if (logoStatus !== 'init') {
      if (pageCurrent !== 'home') {
        videoRef?.current?.play();
        setLogoAnimate('logo-to-close');
      } else {
        handleVideoRewind();
        setLogoAnimate('close-to-logo');
      }
    }
  }, [pageCurrent]);

  useEffect(() => {
    if (videoRef?.current) {
      setTimeout(() => {
        videoRef?.current?.play();
      }, 1000 * (DELAY_INIT + 1));
    }
  }, [videoRef, DELAY_INIT]);

  const handleOnTimeUpdate = () => {
    if (videoRef.current) {
      const ref = videoRef.current;
      const progress = (ref.currentTime / ref.duration) * 100 || 0;

      if (logoStatus === 'init') {
        if (progress >= 35 && pageCurrent === 'home') {
          ref.pause();
          setLogoStatus('logo');
        } else {
          if (progress >= 35) setLogoAnimate('logo-to-close');
        }
      }
    }
  };

  const handleVideoRewind = () => {
    if (videoRef.current) {
      const ref = videoRef.current;
      const intervalRewind = setInterval(function () {
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

  // const logoCloseEvent = () => {
  //   if (logoStatus === 'init') {
  //     videoRef?.current?.play();
  //   } else if (logoStatus === 'logo') {
  //     videoRef?.current?.play();
  //     setLogoAnimate('logo-to-close');
  //   } else {
  //     handleVideoRewind();
  //     setLogoAnimate('close-to-logo');
  //   }
  // };

  const handleOnEnded = () => {
    setLogoStatus('close');
  };

  return {
    logoStatus,
    logoAnimate,
    handleOnTimeUpdate,
    handleOnEnded,
    pageCurrent
  };
};

export default useSidebar;
