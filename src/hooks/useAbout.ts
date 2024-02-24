import { useEffect, useState } from 'react';

import { usePageContext } from 'context/pages/pages';

export const useAbout = () => {
  const [borderAnim, setBorderAnim] = useState(false);

  const { handlePageCurrent, originPage } = usePageContext();

  useEffect(() => {
    if (handlePageCurrent) handlePageCurrent('about');

    setTimeout(() => {
      setBorderAnim(true);
    }, 1000 * (originPage === '' ? 4 : 1.5));
  }, []);

  return { originPage, borderAnim };
};
