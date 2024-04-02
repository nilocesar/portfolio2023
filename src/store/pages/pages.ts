import { create } from 'zustand';

type PageStore = { pageCurrent?: string; init?: boolean };

type StoreProps = {
  state: {
    page: PageStore;
  };
  actions: {
    handleSetPage: (pageChange: PageStore) => void /* eslint no-unused-vars : "off" */;
  };
};

export const usePageStore = create<StoreProps>()((set) => ({
  state: {
    page: { pageCurrent: 'home', init: true }
  },
  actions: {
    handleSetPage: (pageChange: PageStore) => {
      set((st) => ({
        state: {
          page: { ...st.state.page, ...pageChange }
        }
      }));
    }
  }
}));
