import { useEffect, useState } from 'react';

import { useAppContext } from 'context';

export const useAbout = () => {

  const { originPage, setPageCurrent } = useAppContext();

  useEffect(()=>{
    setPageCurrent('about');
  },[])

  return { originPage }
}
