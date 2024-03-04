"use client";

import { usePathname } from 'next/navigation';
import { useRef } from "react";
import { usePageStore } from "store";

export const PageInitializer = ({page}:any) => {

  const pathname = usePathname();
  console.log(pathname);

  const isInitialized = useRef<boolean>(false);
  if (!isInitialized.current) {

    usePageStore.setState({state:{ page:page } });
    isInitialized.current = true;
  }
  return null;
};
