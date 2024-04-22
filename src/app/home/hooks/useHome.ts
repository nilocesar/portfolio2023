import { useEffect } from 'react';

import { timeHome } from 'utils/motionTime';

import { usePageStore, useBlogStore } from 'store';

const useHome = () => {
  const { pageCurrent } = usePageStore((res) => {
    return res.state.page;
  });

  const { blogs } = useBlogStore.getState();

  useEffect(() => {
    usePageStore.setState({ state: { page: { pageCurrent: 'home', init: false } } });
  }, []);

  const variantsHome = {
    hidden: {
      display: 'none'
    },
    visible: {
      display: 'block',
      transition: {
        display: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeHome(pageCurrent)
        }
      }
    }
  };

  return { blogs, pageCurrent, variantsHome };
};

export default useHome;
