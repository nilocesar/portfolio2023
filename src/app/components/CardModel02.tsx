import Image from 'next/image';

export function CardModel02() {
  return (
    <a
      href="/"
      className="bg-white/5 p-3 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2"
    >
      <Image
        src="/aa2.png"
        className="w-full"
        width={120}
        height={104}
        alt="Capa do album"
      ></Image>
      <strong className="text-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-500">Cesar, Nilo.</span>
    </a>
  );
}
