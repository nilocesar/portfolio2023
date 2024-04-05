import { unstable_cache } from 'next/cache';

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getCurrentCache = unstable_cache(
  async () => {
    const randomModel = randomInteger(0, 3);
    const sb_w = randomInteger(17, 35);
    const sb_h = randomInteger(12, 17);

    return { sb_h, sb_w, randomModel };
  },
  [],
  {
    revalidate: false,
    tags: ['current-data']
  }
);
