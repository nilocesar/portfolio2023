import { useEffect, useState } from 'react';

import { usePageContext } from 'context/pages/pages';

export const useHome = () => {
  const [thumbsStatus, setThumbs] = useState(false);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const { pageCurrent, handlePageCurrent, handleOriginPage } = usePageContext();

  useEffect(() => {
    if (!thumbsStatus)
      setTimeout(() => {
        setThumbs(true);
        const delayedItems: number[] = [];
        const delay = 1000 * 0.2;

        items.forEach((item, index) => {
          setTimeout(() => {
            delayedItems.push(item);
            setItems([...delayedItems]);
          }, index * delay);
        });

        if (handlePageCurrent) handlePageCurrent('home');
        if (handleOriginPage) handleOriginPage('home');
      }, 1000 * (pageCurrent === 'home' ? 1.2 : 0.5));
  }, [items, thumbsStatus]);

  return { thumbsStatus, items };
};
