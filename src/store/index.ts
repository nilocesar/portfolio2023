import { create } from 'zustand'

type ActionStore = {
  pageCurrent: string;
  setPageCurrent: (page:string)=>void;
  originPage: string;
  setOriginPage: (origin:string)=>void;
}

export const useStore = create<ActionStore>((set) => ({
  pageCurrent: 'home',
  setPageCurrent: (page:string) => set((state) => ({ pageCurrent: page })),
  originPage: '',
  setOriginPage: (origin:string) => set((state) => ({ originPage: origin })),
}))

