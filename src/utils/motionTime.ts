export const timeAbout = (originPage: string | null | undefined, plus: number | null = null) => {
  return (originPage === '' ? 4 : 1.5) + (plus ? plus : 0);
};
