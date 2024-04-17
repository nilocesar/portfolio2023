'use client';

import { useEffect } from 'react';

import { CardModel } from 'components/CardModel';
import { MotionDiv } from 'components/MotionElement';

import { timeHome } from 'utils/motionTime';

import { usePageStore, useBlogStore } from 'store';

export default function HomeContainer() {
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

  return (
    <>
      <MotionDiv
        variants={variantsHome}
        initial="hidden"
        animate="visible"
        className={`flex-1 max-h-screen overflow-y-scroll relative`}
      >
        {blogs.map((item, i) => {
          const delay = timeHome(pageCurrent) + i / 10 + 0.5;
          return <CardModel key={item.slug} it={i} data={item} delay={delay} />;
        })}
      </MotionDiv>
    </>
  );
}
