import { cache } from 'react';

import { modelScreen } from 'utils/modelScreen';

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getCache = cache(() => {
  const { modelSelect } = modelScreen(randomInteger(0, 3));

  return modelSelect;
});
