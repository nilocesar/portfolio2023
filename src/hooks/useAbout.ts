import { useEffect, useState } from 'react';

import { useAppContext } from 'context';

export const useAbout = () => {
  const { originPage, setPageCurrent } = useAppContext();
  const [borderAnim, setBorderAnim] = useState(false);

  useEffect(() => {
    setPageCurrent('about');

    setTimeout(() => {
      setBorderAnim(true);
    }, 1000 * (originPage === '' ? 4 : 1.5));
  }, []);

  return { originPage, borderAnim };
};
