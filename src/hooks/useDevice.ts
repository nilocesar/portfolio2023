import { useState, useEffect } from 'react';

export const useDevice = () => {
  const [isIOS, setIOS] = useState<null | boolean>(null);

  useEffect(() => {
    const iosDevice = getComputedStyle(document.documentElement).getPropertyValue('--isDEVICE');
    const ios = String(iosDevice) === 'ok';
    setIOS(ios);
  }, []);

  return { isIOS };
};
