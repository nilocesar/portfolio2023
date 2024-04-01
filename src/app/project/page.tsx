'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Card, CardContent } from '@/shadcn-ui/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/shadcn-ui/ui/carousel';

import { usePageStore } from 'store';

import { MotionDiv } from 'components/MotionElement';

import { timeOther } from 'utils/motionTime';
import { cn } from 'utils/cn';



const Project = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);

  const { init } = usePageStore((res) => {
    return res.state.page;
  });

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
    setCurrent(Number(item));
    usePageStore.setState({ state: { page: { pageCurrent: 'project' + item, init: false } } });

    api.on('select', () => {
      const itemCurrent = api.selectedScrollSnap();
      setCurrent(itemCurrent);
      router.push(pathname + '?' + createQueryString('item', itemCurrent.toString()));
    });

  }, [api]);


   useEffect(() => {

   }, [searchParams]);


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
                    <div
                      className={cn(`w-full max-h-[100%]
                             bg-opacity-5 overflow-y-auto p-10`)}
                    >
                      <div className="mx-auto flex flex-col max-w-screen-2xl">
                        <div className="w-full lg:flex xl:flex items-center">
                          <div className="w-full lg:w-1/2 xl:w-1/2">
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
                              {/* <div className="flex items-center h-8 text-white bg-amber-900">
                                <div className="w-3 h-3 ml-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
                              </div> */}
                              <img
                                src="https://www.thehindu.com/entertainment/qh3fnb/article29475886.ece/ALTERNATES/LANDSCAPE_1200/batman-day"
                                alt="Lorem ipsum dolor sit amet"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="w-full pt-12 lg:w-1/2 xl:w-1/2 lg:pl-12 lg:pt-0">
                            <p className="text-sm font-bold tracking-wide text-amber-200 uppercase">
                              Lorem ipsum dolor sit
                            </p>
                            <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-amber-100">
                              Lorem ipsum dolor sit
                            </h2>
                            <p className="mt-3  xl:text-xl text-amber-100">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sem
                              iaculis,
                            </p>

                            <a
                              href="#0"
                              className="flex items-center mt-8 font-medium text-amber-500 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>View Project</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-amber-50 border-none hover:text-amber-200" />
              <CarouselNext className="text-amber-50 border-none hover:text-amber-200" />
            </Carousel>
          </MotionDiv>
        </div>
      </MotionDiv>
    </>
  );
};

export default Project;
