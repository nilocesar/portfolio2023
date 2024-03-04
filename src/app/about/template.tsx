import { ReactNode } from 'react';

import { usePageStore } from 'store';

import { MotionDiv, MotionAside } from 'components/MotionElement';

import { timeAbout } from 'utils/motionTime';

export default function Template({ children }: { children: ReactNode }) {
  const originPage = usePageStore.getState().state.page.originPage;

  const variantsLine1 = {
    hidden: {
      display: 'none',
      position: 'absolute',
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
          delay: timeAbout(originPage)
        },
        height: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeAbout(originPage, 0.25)
        }
      }
    }
  };

  const variantsLine2 = {
    hidden: {
      display: 'none',
      position: 'absolute',
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
          delay: timeAbout(originPage, 0.5)
        },
        width: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeAbout(originPage, 0.5)
        },
        height: {
          duration: 0.25,
          ease: 'easeInOut',
          delay: timeAbout(originPage, 0.75)
        }
      }
    }
  };

  return (
    <MotionAside
      className="aboutScreen"
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'Spring',
        delay: originPage === 'home' ? 1 : 3
      }}
    >
      <div className={`drawBorder`}>
        <MotionDiv
          className={`line1`}
          variants={variantsLine1}
          initial="hidden"
          animate="visible"
          viewport={{ amount: 0 }}
        />
        <MotionDiv
          className={`line2`}
          variants={variantsLine2}
          initial="hidden"
          animate="visible"
          viewport={{ amount: 0 }}
        />
        {children}
      </div>
    </MotionAside>
  );
}
