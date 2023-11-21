'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [pageCurrent, setPageCurrent] = useState('home');
  const [originPage, setOriginPage] = useState('');

  const appValue = {
    pageCurrent,
    setPageCurrent,
    originPage,
    setOriginPage
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
