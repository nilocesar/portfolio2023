import Link from 'next/link';

import { User } from './models/user';
import { getUsers } from './services/get-users';
export const metadata = {
  title: 'Tela de Usuário',
  description: 'Listen to music'
};

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1>Usuário</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              {user.first_name} {user.last_name} {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
