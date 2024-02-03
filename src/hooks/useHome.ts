import { useEffect, useState } from 'react';

import { useAppContext } from 'context';
import { useStore } from 'store';

// export const useHome = () => {
//   const [thumbsStatus, setThumbs] = useState(false);
//   const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   const { setPageCurrent, setOriginPage, pageCurrent } = useAppContext();

//   useEffect(() => {
//     if (!thumbsStatus)
//       setTimeout(() => {
//         setThumbs(true);
//         const delayedItems: number[] = [];
//         const delay = 1000 * 0.2;

//         items.forEach((item, index) => {
//           setTimeout(() => {
//             delayedItems.push(item);
//             setItems([...delayedItems]);
//           }, index * delay);
//         });

//         setPageCurrent('home');
//         setOriginPage('home');
//       }, 1000 * (pageCurrent === 'home' ? 1.2 : 0.5));
//   }, [items, thumbsStatus]);

//   return { thumbsStatus, items };
// };


export const useHome = () => {
  const [thumbsStatus, setThumbs] = useState(false);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // const { setPageCurrent, setOriginPage, pageCurrent } = useAppContext();
  const { setPageCurrent, setOriginPage, pageCurrent } = useStore.getState();


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

        setPageCurrent('home');
        setOriginPage('home');
      }, 1000 * (pageCurrent === 'home' ? 1.2 : 0.5));
  }, [items, thumbsStatus]);

  return { thumbsStatus, items };
};
