'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

import { modelScreen } from 'utils/modelScreen';

const AppContext = createContext<any>(undefined);

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function AppWrapper({ children }: { children: ReactNode }) {
  const { modelSelect } = modelScreen(randomInteger(0, 3));

  const [pageCurrent, setPageCurrent] = useState('home');
  const [originPage, setOriginPage] = useState('');
  const [modelSel, setModelSelect] = useState(modelSelect);

  const appValue = {
    pageCurrent,
    setPageCurrent,
    originPage,
    setOriginPage,
    modelSelect: modelSel,
    setModelSelect
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
