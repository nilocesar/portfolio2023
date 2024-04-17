import { Metadata } from 'next';

import { useBlogStore } from 'store';

import AboutContainer from './AboutContainer';


type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const about = useBlogStore.getState().about;

  return {
    title: about.title,
    description: about.description
  };
}

export default function About() {
  return (
    <>
      <AboutContainer />
    </>
  );
}
