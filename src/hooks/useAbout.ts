import { useEffect, useState, useRef } from 'react';

import { useAppContext } from 'context';
import { useStore } from 'store';

export const useAbout = () => {
  // const { originPage, setPageCurrent } = useAppContext();
  const [borderAnim, setBorderAnim] = useState(false);

  const { setPageCurrent, originPage } = useStore.getState();

  useEffect(() => {
    setPageCurrent('about');

    setTimeout(() => {
      setBorderAnim(true);
    }, 1000 * (originPage === '' ? 4 : 1.5));
  }, []);

  console.log('originPage' + originPage);

  return { originPage, borderAnim };
};

// export const useAbout = () => {

//   let borderAnim = false;
//   const originPage = useStore.getState().originPage;
//   const pageCurrent = useStore.getState().pageCurrent;

//   useStore.getState().setPageCurrent('about');

//   setTimeout(() => {
//     borderAnim = true;
//   }, 1000 * (originPage === '' ? 4 : 1.5));

//   console.log("pageCurrent "+ originPage)
//   console.log("borderAnim "+ borderAnim)
//   //alert(originPage)
//   // alert(borderAnim)


//   return { originPage, borderAnim };
// };
