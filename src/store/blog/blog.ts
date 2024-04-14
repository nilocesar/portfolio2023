import { create } from 'zustand';

export interface BlogType {
  layout?: string;
  date?: string;
  card: string;
  thumbnail: string;
  title: string;
  link?: string;
  description?: string;
  slug?: string;
}

interface BlogState {
  blogs: BlogType[];
  handleSetBlogs: (blogs: BlogType[]) => void /* eslint no-unused-vars : "off" */;
}

export const useBlogStore = create<BlogState>()((set) => ({
  blogs: [],
  handleSetBlogs: (blogs: BlogType[]) => set((st) => ({ blogs: [...st.blogs, ...blogs] }))
}));
