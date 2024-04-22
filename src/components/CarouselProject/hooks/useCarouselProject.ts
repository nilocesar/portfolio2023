'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

import { type CarouselApi } from 'shadcn-ui/ui/carousel';

import { timeOther } from 'utils/motionTime';

import { usePageStore, useBlogStore } from 'store';

function useCarouselProject({ init }: { init: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const { blogs } = useBlogStore.getState();

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
    usePageStore.setState({ state: { page: { pageCurrent: item as string, init: false } } });

    api.on('select', () => {
      const itemCurrent = api.selectedScrollSnap();
      setCurrent(itemCurrent);
      router.push(pathname + '?' + createQueryString('item', itemCurrent.toString()));
    });
  }, [api]);

  return { current, blogs, setApi, timeOther };
}

export default useCarouselProject;
