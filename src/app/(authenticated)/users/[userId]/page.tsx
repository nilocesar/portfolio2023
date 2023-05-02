import { use } from 'react';

import { User } from '../models/user';
import { getUsersById } from '../services/get-user-by-id';
import { getUsers } from '../services/get-users';

import OtherUsers from 'app/components/OtherUsers';

export async function generateMetadata({
  params
}: {
  params: { userId: string };
}) {
  const user = await getUsersById(params.userId);
  const name = `${user.first_name} ${user.last_name}`;

  return {
    title: `${name}`
  };
}

export async function generateStaticParams() {
  const users = await getUsers();
  const usersIds = users.map((user: User) => ({ userId: user.id.toString() }));

  return usersIds;
}

export default async function UserDetailsPage({
  params
}: {
  params: { userId: string };
}) {
  const user = await getUsersById(params.userId);
  return (
    <div>
      <h2>
        Usuário: {user.first_name} {user.last_name}
      </h2>
      <span>{user.email}</span>
      <hr></hr>
      {user.body}
      <hr></hr>
      <h1>Outros usuários</h1>
      <OtherUsers currentUserId={params.userId}></OtherUsers>
    </div>
  );
}
