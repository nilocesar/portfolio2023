'use client';

import { CardModel } from '../components/CardModel';
import { useHome } from '../hooks/useHome';

export default function Home() {
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
