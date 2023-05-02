'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        router.push('/');
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="">Email:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Senha:</label>
        <input type="password" />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
}
