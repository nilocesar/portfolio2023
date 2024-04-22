'use client';

import { CardModel } from 'components/CardModel';
import { MotionDiv } from 'components/MotionElement';

import { timeHome } from 'utils/motionTime';

import useHome from './hooks/useHome';

export default function HomeContainer() {
  const { blogs, pageCurrent, variantsHome } = useHome();

  return (
    <>
      <MotionDiv
        variants={variantsHome}
        initial="hidden"
        animate="visible"
        className={`home flex-1 max-h-screen overflow-y-scroll relative`}
      >
        {blogs.map((item, i) => {
          const delay = timeHome(pageCurrent) + i / 10 + 0.5;
          return <CardModel key={item.slug} it={i} data={item} delay={delay} />;
        })}
      </MotionDiv>
    </>
  );
}
