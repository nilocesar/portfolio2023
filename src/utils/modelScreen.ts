type modelScreenObj = {
  base: string;
  sidebar: string;
};

export const modelScreen = (randomModel: number , sb_w: number, sb_h:number ) => {

  const sb_w_randow = sb_w; /// valor do width sidebar
  const sb_h_randow = sb_h; /// valor do height sidebar

  const modelScreenItens: Array<modelScreenObj> = [
    {
      base: `flex-col lg:flex-row`,
      sidebar: `w-full h-[${sb_h_randow}rem] lg:h-full lg:w-[${sb_w_randow}rem] sidebar sidebar0`
    },
    {
      base: `flex-col-reverse lg:flex-row-reverse`,
      sidebar: `w-full h-[${sb_h_randow}rem] lg:h-full lg:w-[${sb_w_randow}rem] sidebar sidebar1`
    },
    {
      base: `flex-col`,
      sidebar: `w-full h-[${sb_h_randow}rem] sidebar sidebar2`
    },
    {
      base: `flex-col-reverse`,
      sidebar: `w-full h-[${sb_h_randow}rem] sidebar sidebar3`
    }
  ];

  return { modelSelect: modelScreenItens[randomModel] };
};
