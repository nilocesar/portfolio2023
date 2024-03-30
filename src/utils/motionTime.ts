export const timeOther = (init: boolean | undefined, plus: number | null = null) => {
  return ( init ? 4 : 1.5) + (plus ? plus : 0);
};

export const timeHome = (pageCurrent: string | null | undefined, plus: number | null = null) => {
  return ( pageCurrent === 'home' ? 1.2 : 0.5) + (plus ? plus : 0);
};
