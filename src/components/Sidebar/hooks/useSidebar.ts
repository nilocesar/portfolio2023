import { useState, useEffect, MutableRefObject } from "react";

type videoElement = any; //MutableRefObject<HTMLVideoElement>

const useSidebar = (videoRef: videoElement  ) => {

  const [logoStatus, setLogoStatus] = useState('init');
  const [logoAnimate, setLogoAnimate] = useState('close-to-logo');

  const playInit = (videoRef:videoElement) =>{
     videoRef.current.play();
  }

  useEffect(() => {

    if(videoRef.current){
      setTimeout(()=>{
        playInit(videoRef);
      }, 1000 * 2 )
    }

  }, [videoRef]);

  const handleOnTimeUpdate = (videoRef:videoElement) => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100 || 0;

    if (progress >= 35 && logoStatus === 'init') {
      videoRef.current.pause();
      setLogoStatus('logo');
    }
  };

  const handleVideoRewind = (videoRef: videoElement) => {
    let intervalRewind = setInterval(function () {

      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100 || 0;

      videoRef.current.playbackRate = 1.0;
      videoRef.current.currentTime += -0.1;

      if (progress < 50 ) {
        clearInterval(intervalRewind);
        videoRef.current.pause();
        setLogoStatus('logo');
      } else {
        videoRef.current.currentTime += -0.1;
      }
    }, 30 * 2);
  };

  const logoCloseEvent = (videoRef:videoElement) => {
    if (logoStatus === 'init' ) {
      videoRef.current.play();
    }
    else if (logoStatus === 'logo') {
      videoRef.current.play();
      setLogoAnimate('logo-to-close');
    } else {
      handleVideoRewind(videoRef);
      setLogoAnimate('close-to-logo');
    }
  };

  const handleOnEnded = (videoRef:any) => {
    setLogoStatus('close');
  };


  return {
    logoStatus, logoAnimate, handleOnTimeUpdate , logoCloseEvent , handleOnEnded
  };
};

export default useSidebar;
