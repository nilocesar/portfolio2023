'use client';

import { useEffect } from 'react';

import { CardModel } from 'components/CardModel';
import { MotionDiv } from 'components/MotionElement';
import { usePageStore } from 'store';

import { timeHome } from 'utils/motionTime';

export default function HomeContainer() {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { pageCurrent } = usePageStore((res) => {
    return res.state.page;
  });

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
        <ul className={`relative`}>
          {items.map((it, i) => {
            const delay = timeHome(pageCurrent) + i / 10 + 0.5;
            return <CardModel key={'s' + it} it={it} delay={delay} />;
          })}
        </ul>
      </MotionDiv>
    </>
  );
}
