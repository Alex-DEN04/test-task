import { useState, useEffect } from 'react';

import { Cards, Button } from './UserListStyled';
import { UserCard } from 'components/Card/Card';
import { fetchUsers } from 'API';

export const UsersList = () => {
  const [users, setUser] = useState([]);
  const [ac, setAc] = useState(3);
  
  useEffect(() => {
        const getUsers = async () => {
        const data = await fetchUsers();
            setUser(data.slice(0, ac));
    };
    getUsers();
  }, [ac]);
    const LoadMore = () => {
        setAc(ac + 3)
    }
  return (
    <Cards>
          <UserCard items={users} />
          <Button onClick={LoadMore}>Load more</Button>
    </Cards>
  );
};
