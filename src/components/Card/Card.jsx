// import { useState, useEffect } from 'react';
// import { useEffect, useState } from 'react';

import {
//   FollowingBtn,
  FollowBtn,
  Card,
  Logo,
  TweetsCounter,
  FollowersCounter,
  Avatar,
} from './CardStyled';
import logo from '../../images/logo.png';
// import { fetchUsers } from 'API';

export const UserCard = ({items}) => {
    // const [users, setUser] = useState([]);
    // const [follow, setFollow] = useState()

//     useEffect(() => {
//         const getUsers = async () => {
//         const data = await fetchUsers();
//             setUser(data);
//         // setFollow()
//     };
//     getUsers();
//   }, []);
  
    // const onClickHandler = (value) => {
    //     // console.dir(value)
    //     setFollow(value + 1)
    //     if (value < follow) {
    //         setFollow(value - 1)
    //     }
        
    // }
    
  return (
    <>
      {items && items.map(({id, tweets, followers, avatar}) => (
        <Card key={id}>
          <Logo src={logo} alt="logo" />
          <TweetsCounter>{tweets} tweets</TweetsCounter>
          <FollowersCounter>{followers} followers</FollowersCounter>
              <Avatar src={avatar}></Avatar>
              <FollowBtn type='button' onClick={() => console.log(items)}>Follow</FollowBtn>
          {/* {following ? <FollowingBtn>Following</FollowingBtn> : <FollowBtn>Follow</FollowBtn>} */}
        </Card>
      ))}
    </>
  );
};