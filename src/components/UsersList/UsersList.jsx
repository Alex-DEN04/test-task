import { useState, useEffect } from 'react';

import { Cards, Button } from './UserListStyled';
import { UserCard } from 'components/Card/Card';
import { fetchUsers } from 'API';

export const UsersList = () => {
  const [users, setUser] = useState([]);
  const [ac, setAc] = useState(3);
  // const [follow, setIsFollow] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUser(data.slice(0, ac));
    };
    getUsers();
  }, [ac]);
  const LoadMore = () => {
    setAc(ac + 3);
  };

  const onClickHandler = (id) => {
    // console.log(event)
    // console.log(items)
    // const use = users.find(item => item.id === id)
    // use.followers += 1
    // console.log(use.followers)
    // console.log(users)
    // console.log(following)
    // setUser(users => [use, ...users]);
    // console.log(object)
    const use = users.find(item => item.id === id)
    if (!use.isFollow) {
      setUser(users => {
        use.followers = use.followers + 1
        use.isFollow = true;
        return [...users];
      });
      return;
    };
      setUser(users => {
        use.followers = use.followers - 1;
        use.isFollow = false;
        return [...users];
      });
    
      // console.log(use.followers)
      // console.log(users)
      
    // });
    // setIsFollow(true)
  };

  return (
    <Cards>
      <UserCard items={users} onClick={onClickHandler} />
      <Button onClick={LoadMore}>{ac < 12 ? 'Load more' : 'End'}</Button>
    </Cards>
  );
};
