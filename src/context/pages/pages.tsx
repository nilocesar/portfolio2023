'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type PageContext = {
  pageCurrent?: string;
  handlePageCurrent?: (page: string) => void;
  originPage?: string;
  handleOriginPage?: (page: string) => void;
};

const PageContext = createContext<PageContext>({});

export const PageProviders = ({ children }: { children: ReactNode }) => {
  const [pageCurrent, setPageCurrent] = useState<string>('home');
  const [originPage, setOriginPage] = useState<string>('');

  const handlePageCurrent = useCallback((page: string) => {
    setPageCurrent(page);
  }, []);

  const handleOriginPage = useCallback((page: string) => {
    setOriginPage(page);
  }, []);

  const poviderValue = { pageCurrent, handlePageCurrent, originPage, handleOriginPage };

  return (
    <>
      <PageContext.Provider value={poviderValue}>{children}</PageContext.Provider>
    </>
  );
};

export const usePageContext = () => useContext(PageContext);
