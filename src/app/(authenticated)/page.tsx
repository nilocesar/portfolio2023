import { CardModel } from '../components/CardModel';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const container = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="flex-1 max-h-screen overflow-y-scroll relative">
      <ul className="relative">
        {container.map((it, i) => {
          return <CardModel key={i} it={it} />;
        })}
      </ul>
    </main>
  );
}
