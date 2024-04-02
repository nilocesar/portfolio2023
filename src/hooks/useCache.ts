import { cache } from 'react';

import { modelScreen } from 'utils/modelScreen';

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getCacheData = cache(() => {

  const sb_model =  randomInteger(0, 3);
  const sb_w = randomInteger(17, 35);
  const sb_h = randomInteger(12, 17);

  return `${sb_model}, ${sb_w}, ${sb_model}`;
});

export const getCache = cache(() => {

  const sb_model =  randomInteger(0, 3);
  const sb_w = randomInteger(17, 35);
  const sb_h = randomInteger(12, 17);
  const { modelSelect } = modelScreen( sb_model, sb_w, sb_h );

  return modelSelect;
});
