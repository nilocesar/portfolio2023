"use client";
import { useRef } from "react";
import { usePageStore } from "store";

export const PageInitializer = ({page}:any) => {
  const isInitialized = useRef<boolean>(false);
  if (!isInitialized.current) {
    console.log(page)
    usePageStore.setState({state:{ page:page } });
    isInitialized.current = true;
  }
  return null;
};
