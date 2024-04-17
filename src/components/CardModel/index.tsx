import Image from 'next/image';
import Link from 'next/link';

import { MotionDiv, MotionLi, MotionVideo } from 'components/MotionElement';

import { BlogType } from 'store';

type Props = {
  it: number;
  delay: number;
  data: BlogType;
};

export function CardModel({ it, data, delay }: Props) {
  // const iosDevice = (window !== undefined) ? window.getComputedStyle(document.documentElement).getPropertyValue('--isDEVICE') : null ;
  const isIOS = false; /// String(iosDevice)

  // if (typeof window !== 'undefined') {
  //   console.log('window.innerHeight', window);
  // }
  // console.log(isIOS);

  const variantsLi = {
    hidden: {
      display: 'none'
    },
    visible: {
      display: 'block',
      transition: {
        display: {
          duration: 0.5,
          ease: 'easeInOut',
          delay: delay
        }
      }
    }
  };

  return (
    <MotionDiv
      variants={variantsLi}
      initial="hidden"
      animate="visible"
      className={`relative h-[7rem] sm:h-[14rem] w-full border-b-[0.2rem] border-neutral-200 block`}
    >
      {isIOS ? (
        <Image
          src={'/image/spritesheet2.png'}
          alt=""
          fill
          className={`h-[100%] w-full object-cover absolute`}
        />
      ) : (
        <MotionVideo
          src="./spritesheet.webm"
          className={`h-[100%] w-full object-cover absolute`}
          autoPlay={true}
          loop={false}
          muted
          initial={{
            opacity: 0.8
          }}
          animate={{
            opacity: 0
            // display: 'none'
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: delay + 2
          }}
        />
      )}

      <Link
        href={{
          pathname: '/project',
          query: { item: it }
        }}
        className={''}
      >
        <MotionDiv
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: delay + 1
          }}
        >
          <Image
            src={data.card}
            fill
            className={`object-cover transition-opacity ease-in-out opacity-[0.3] duration-[1s] hover:opacity-[0.7] cursor-pointer`}
            // onLoadingComplete={(img) => imgLoading(img)}
            alt={data.description as string}
          />
        </MotionDiv>
      </Link>
    </MotionDiv>
  );
}
