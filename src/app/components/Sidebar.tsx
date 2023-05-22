import Link from 'next/link';

import { Home, User, LogInIcon } from 'lucide-react';

type Props = {
  modelSelect: string;
};

export function Sidebar({ modelSelect }: Props) {
  return <aside className={`bg-zinc-950 p-6 ${modelSelect}`}>teste</aside>;
}
