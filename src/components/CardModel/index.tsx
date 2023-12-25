'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useDevice } from 'hooks/useDevice';

type Props = {
  it: number;
};

export function CardModel({ it }: Props) {
  const { isIOS } = useDevice();
  console.log(it);

  return (
    <motion.li
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn'
      }}
      className={`relative h-[7rem] sm:h-[14rem] w-full border-b-[0.2rem] border-neutral-500 block`}
    >
      {isIOS ? (
        <Image
          src={'/image/spritesheet2.png'}
          alt=""
          fill
          className={`h-[100%] w-full object-cover absolute`}
        />
      ) : (
        <motion.video
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
            delay: 1.6
          }}
        />
      )}

      <motion.button
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 0.8
        }}
      >
        <Image
          src={`https://picsum.photos/600/400`}
          alt=""
          fill
          className={`object-cover transition-opacity ease-in-out opacity-[0.3] duration-[1s] hover:opacity-[0.7] cursor-pointer`}
          // onLoadingComplete={(img) => imgLoading(img)}
        />
      </motion.button>
    </motion.li>
  );
}
