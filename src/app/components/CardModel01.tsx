import Image from 'next/image';

import { Play } from 'lucide-react';

export function CardModel01() {
  return (
    <a
      href="/"
      className="bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
    >
      <Image
        src="/aa2.png"
        width={104}
        height={104}
        alt="Capa do album"
      ></Image>
      <strong>Capa de um Album</strong>
      <button className="w-12 h-12 pl-1 items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 hidden group-hover:flex">
        <Play></Play>
      </button>
    </a>
  );
}
