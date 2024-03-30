import { create } from 'zustand';

type PageStore = { pageCurrent?: string , init?: boolean }

type StoreProps = {
   state:{
    page: PageStore
   },
   actions: { handleSetPage: (pageChange:PageStore) => void }
};

export const usePageStore = create<StoreProps>()((set) => ({
  state : {
    page: {pageCurrent:'home', init: true }
  },
  actions: {
    handleSetPage: (pageChange) => {
      set((st) => ({
        state : {
          page: { ...st.state.page, ...pageChange }
        },
    }));
  },
  }
}));
