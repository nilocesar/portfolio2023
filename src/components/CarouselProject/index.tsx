'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'shadcn-ui/ui/carousel';

import CardProject from 'components/CardProject';

import useCarouselProject from './hooks/useCarouselProject';

function CarouselProject({ init }: { init: boolean }) {
  const { current, blogs, setApi, timeOther } = useCarouselProject({ init });

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
        {blogs?.map((item, index) => (
          <CarouselItem key={index}>
            <CardProject data={item} delay={timeOther(init, 1.2)} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-amber-50 border-none hover:text-amber-200 disabled:opacity-5" />
      <CarouselNext className="text-amber-50 border-none hover:text-amber-200 disabled:opacity-5" />
    </Carousel>
  );
}

export default CarouselProject;
