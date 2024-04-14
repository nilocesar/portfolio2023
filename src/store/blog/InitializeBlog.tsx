'use client';

import { useRef } from 'react';

import { useBlogStore, BlogType } from './blog';

type InitializeBlogProps = {
  blogs: BlogType[];
};

export const InitializeBlogStore = ({ blogs }: InitializeBlogProps) => {
  const initializer = useRef(false);
  const handleSetBlogs = useBlogStore((state) => state.handleSetBlogs);

  if (!initializer.current) {
    handleSetBlogs(blogs);
    initializer.current = true;
  }

  return null;
};
