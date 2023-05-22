import Image from 'next/image';

import { Play } from 'lucide-react';

type Props = {
  it: number;
};

export function CardModel({ it }: Props) {
  // const imgLoading = (image: HTMLImageElement) => {
  //   image.classList.remove('opacity-0');
  // };

  return (
    <li className="relative h-[10rem] w-full text-black border-b-[0.1rem] divide-slate-700">
      <button className="opacity-[0.2] hover:opacity-[0.7] cursor-pointer">
        <Image
          src={`https://picsum.photos/600/400`}
          alt=""
          fill
          className="transition-opacity opacity-1 duration-[2s] object-cover"
          // onLoadingComplete={(img) => imgLoading(img)}
        />
      </button>
    </li>
  );
}
