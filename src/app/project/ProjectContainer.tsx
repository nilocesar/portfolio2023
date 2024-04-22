'use client';

import { Suspense } from 'react';

import CarouselProject from 'components/CarouselProject';
import { MotionDiv } from 'components/MotionElement';

import { cn } from 'utils/cn';
import { timeOther } from 'utils/motionTime';

import useProject from './hooks/useProject';

const ProjectContainer = () => {
  const { init, variantsLine1, variantsLine2 } = useProject();

  return (
    <>
      <MotionDiv
        className="aboutScreen"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'Spring',
          delay: timeOther(init, -1)
        }}
      >
        <div className={cn(`drawBorder`, 'relative h-[100%] flex justify-center items-center')}>
          <MotionDiv
            className={`line1 absolute !z-10 !pointer-events-none`}
            variants={variantsLine1}
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0 }}
          />
          <MotionDiv
            className={`line2 absolute !z-10 !pointer-events-none`}
            variants={variantsLine2}
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0 }}
          />
          <MotionDiv
            className={cn(
              '',
              'h-[100%] max-h-[100%] w-[100%] overflow-x-hidden overflow-y-auto p-4 flex justify-center items-center border-none'
            )}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'Spring',
              delay: timeOther(init, 1)
            }}
          >
            <Suspense>
              <CarouselProject init={init as boolean} />
            </Suspense>
          </MotionDiv>
        </div>
      </MotionDiv>
    </>
  );
};

export default ProjectContainer;
