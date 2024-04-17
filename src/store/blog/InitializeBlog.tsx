'use client';

import { useRef } from 'react';

import { useBlogStore, BlogType, AboutType } from './blog';

type InitializeBlogProps = {
  blogs: BlogType[];
  about: AboutType;
};

export const InitializeBlogStore = ({ blogs, about }: InitializeBlogProps) => {
  const initializer = useRef(false);

  const handleSetBlogs = useBlogStore((state) => state.handleSetBlogs);
  const handleSetAbout = useBlogStore((state) => state.handleSetAbout);

  if (!initializer.current) {
    handleSetBlogs(blogs);
    handleSetAbout(about);
    initializer.current = true;
  }

  return null;
};
