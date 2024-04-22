import { useEffect } from 'react';

import { timeOther } from 'utils/motionTime';

import { usePageStore, useBlogStore } from 'store';

const useAbout = () => {
  const { init } = usePageStore((res) => res.state.page);

  const { about } = useBlogStore.getState();

  useEffect(() => {
    usePageStore.setState({ state: { page: { pageCurrent: 'about', init: false } } });
  }, [usePageStore]);

  const variants = {
    hidden: { display: 'none' },
    visible: { display: 'block' }
  };

  const variantsLine1 = {
    hidden: {
      display: 'none',
      border: '2px solid transparent',
      width: 0,
      height: 0,
      top: 0,
      left: 0
    },
    visible: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderTopColor: 'rgba(255 251 235, 1)',
      borderRightColor: 'rgba(255 251 235, 1)',
      transition: {
        width: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeOther(init)
        },
        height: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeOther(init, 0.25)
        }
      }
    }
  };

  const variantsLine2 = {
    hidden: {
      display: 'none',
      border: '2px solid transparent',
      width: 0,
      height: 0,
      bottom: 0,
      right: 0
    },
    visible: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderBottomColor: 'rgba(255 251 235, 1)',
      borderLeftColor: 'rgba(255 251 235, 1)',
      transition: {
        borderColor: {
          duration: 0,
          ease: 'easeInOut',
          delay: timeOther(init, 0.5)
        },
        width: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeOther(init, 0.5)
        },
        height: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeOther(init, 0.75)
        }
      }
    }
  };

  return { variants, variantsLine1, variantsLine2, about, init, timeOther };
};

export default useAbout;
