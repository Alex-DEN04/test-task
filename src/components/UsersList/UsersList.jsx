import { useEffect, useState } from 'react';

import { Cards } from './UserListStyled';
import { fetchUsers } from 'API';
import { UserCard } from 'components/Card/Card';

export const UsersList = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUser(data);
    };
    getUsers();
  }, []);
  console.log(users);

  return (
    <Cards>
      <UserCard items={users} />
    </Cards>
  );
};
