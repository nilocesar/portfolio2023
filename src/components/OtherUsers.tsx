'use client';

import Link from 'next/link';
import React from 'react';

import { getUsers } from '../app/(authenticated)/users/services/get-users';

import { User } from 'app/(authenticated)/users/models/user';

type Props = {
  currentUserId: string;
};

export default function OtherUsers({ currentUserId }: Props) {
  const [otherGet, setOtherUsers] = React.useState([]);

  React.useEffect(() => {
    const otherData = async () => {
      const users = await getUsers();
      console.log(currentUserId);
      setOtherUsers(
        users.filter((user: User) => user.id !== parseInt(currentUserId))
      );
    };

    otherData();
  }, [currentUserId, setOtherUsers]);

  if (otherGet.length === 0) {
    return <>Carregando...</>;
  }

  return (
    <>
      <ul>
        {otherGet.map((user: User) => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              {user.first_name} {user.last_name} {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
