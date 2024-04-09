'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback, Suspense } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/shadcn-ui/ui/carousel';

import CardProject from 'components/CardProject';
import { MotionDiv } from 'components/MotionElement';

import { cn } from 'utils/cn';
import { timeOther } from 'utils/motionTime';

import { usePageStore } from 'store';

function CarouselBase({ init }: { init: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    const item = searchParams.get('item');
    // const item = '1';
    setCurrent(Number(item));
    usePageStore.setState({ state: { page: { pageCurrent: 'project' + item, init: false } } });

    api.on('select', () => {
      const itemCurrent = api.selectedScrollSnap();
      setCurrent(itemCurrent);
      router.push(pathname + '?' + createQueryString('item', itemCurrent.toString()));
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: 'start',
        startIndex: current
      }}
      className="w-full max-h-[100%]"
      setApi={setApi}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <CardProject data={{}} delay={timeOther(init, 1.2)} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-amber-50 border-none hover:text-amber-200 disabled:opacity-5" />
      <CarouselNext className="text-amber-50 border-none hover:text-amber-200 disabled:opacity-5" />
    </Carousel>
  );
}

const ProjectContainer = () => {
  const { init } = usePageStore((res) => {
    return res.state.page;
  });

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
              <CarouselBase init={init as boolean} />
            </Suspense>
          </MotionDiv>
        </div>
      </MotionDiv>
    </>
  );
};

export default ProjectContainer;
