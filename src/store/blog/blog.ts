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

export interface AboutType {
  layout?: string;
  avatar: string;
  title?: string;
  linkedin?: string;
  github?: string;
  description?: string;
  slug?: string;
}

interface BlogState {
  blogs: BlogType[];
  about: AboutType;
  handleSetBlogs: (blogs: BlogType[]) => void /* eslint no-unused-vars : "off" */;
  handleSetAbout: (about: AboutType) => void /* eslint no-unused-vars : "off" */;
}

export const useBlogStore = create<BlogState>()((set) => ({
  blogs: [],
  about: { avatar: '' },
  handleSetBlogs: (blogs: BlogType[]) => set((st) => ({ blogs: [...st.blogs, ...blogs] })),
  handleSetAbout: (about: AboutType) => set((st) => ({ about: { ...st.about, ...about } }))
}));
