import { create } from 'zustand';

type PageStore = {
  pageCurrent?: string;
  handlePageCurrent: (page: string) => void;
  originPage?: string;
  handleOriginPage: (page: string) => void;
};

export const usePageStore = create<PageStore>()((set) => ({
  pageCurrent: '',
  handlePageCurrent: (pageCurrent: string) => {
    set((state) => ({
      pageCurrent: pageCurrent
    }));
  },
  originPage: '',
  handleOriginPage: (originPage: string) => {
    set((state) => ({
      originPage: originPage
    }));
  }
}));
