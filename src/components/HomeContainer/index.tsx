'use client';

import { useHome } from 'hooks/useHome';

import { CardModel } from 'components/CardModel';

export default function HomeContainer() {
  const { thumbsStatus, items } = useHome();

  return (
    <main
      className={`flex-1 max-h-screen overflow-y-scroll relative ${!thumbsStatus ? 'hide' : ''}`}
    >
      {thumbsStatus && (
        <ul className={`relative`}>
          {items.map((it, i) => {
            return <CardModel key={i} it={it} />;
          })}
        </ul>
      )}
    </main>
  );
}
