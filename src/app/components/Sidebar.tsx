import Link from 'next/link';

import { Home, User, LogInIcon } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <nav className="space-y-5 mt-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-bold text-zinc-200"
        >
          <Home />
          Home
        </Link>
        <Link
          href="/users"
          className="flex items-center gap-2 text-xs font-bold text-zinc-200"
        >
          <User />
          Usuários
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-2 text-xs font-bold text-zinc-200"
        >
          <LogInIcon />
          Login
        </Link>
      </nav>

      {/* <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <Link
          href="/home"
          className="text-sm text-zinc-480 hover:text-zinc-100"
        >
          Home
        </Link>
        <Link
          href="/users"
          className="text-sm text-zinc-480 hover:text-zinc-100"
        >
          Usuários
        </Link>
        <Link
          href="/login"
          className="text-sm text-zinc-480 hover:text-zinc-100"
        >
          Login
        </Link>
      </nav> */}
    </aside>
  );
}
