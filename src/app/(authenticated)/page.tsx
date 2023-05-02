import { CardModel01 } from '../components/CardModel01';
import { CardModel02 } from '../components/CardModel02';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-3">
        <button className="p-1 rounded-full bg-black/20">
          <ChevronLeft />
        </button>
        <button className="p-1 rounded-full bg-black/20">
          <ChevronRight />
        </button>
      </div>
      <h1 className="text-semibold text-3xl text-zinc-100 mt-6">
        Good Afternoon
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <CardModel01 />
      </div>
      <h2 className="text-semibold text-2xl mt-10">Made for Nilo César</h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <CardModel02 />
      </div>
    </main>
  );
}
