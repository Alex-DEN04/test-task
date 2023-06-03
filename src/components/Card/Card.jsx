// import { useState, useEffect } from 'react';

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

export const UserCard = ({items}) => {
   console.log(items)
    // const onClickHandler = (value) => {
    //     // console.dir(value)
    //     setFollow(value + 1)
    //     if (value < follow) {
    //         setFollow(value - 1)
    //     }
        
    // }
    // (followers.slice(0, 3),followers.slice(3, 6))
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