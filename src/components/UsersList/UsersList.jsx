import { useState, useEffect } from 'react';

import { Cards, Button } from './UserListStyled';
import { UserCard } from 'components/Card/Card';
import { fetchUsers } from 'API';

export const UsersList = () => {
  const [users, setUser] = useState([]);
  const [ac, setAc] = useState(Number((JSON.parse(localStorage.getItem('acum')))) || 3);
  // (JSON.parse(localStorage.getItem('acum')))
  // Number((JSON.parse(localStorage.getItem('acum'))))
  useEffect(() => {
    try {
      const getUsers = async () => {
        const data = await fetchUsers();
        setUser(data.slice(0, ac));
      };
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, [ac]);
  const LoadMore = () => {
    setAc(ac => {
      ac+=3
      JSON.stringify(localStorage.setItem('acum', `${ac}`));
      return ac
    });
  };

  // const res = (id) => {
  //   try {
  //       const addUsers = async () => {
  //         await postUsers(id)
  //       }
  //       addUsers()
  //     } catch (error) {
  //       console.log(error)
  //     }
  // }

  const onClickHandler = id => {
    const use = users.find(item => item.id === id);
    if (!use.isFollow) {
      setUser(users => {
        use.followers = use.followers + 1;
        use.isFollow = true;
        return [...users];
      });

      return;
    }
    setUser(users => {
      use.followers = use.followers - 1;
      use.isFollow = false;
      return [...users];
    });
  };

  return (
    <Cards>
      <UserCard items={users} onClick={onClickHandler} />
      <Button onClick={LoadMore}>Load more</Button>
    </Cards>
  );
};
