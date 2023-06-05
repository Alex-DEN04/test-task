// import { useState, useEffect } from 'react';

import {
  FollowingBtn,
  FollowBtn,
  Card,
  Logo,
  TweetsCounter,
  FollowersCounter,
  Avatar,
} from './CardStyled';
import logo from '../../images/logo.png';

export const UserCard = ({ items, onClick }) => {
  // console.log(items);

  return (
    <>
      {items &&
        items.map(({ id, tweets, followers, avatar, isFollow }) => (
          <Card key={id}>
            <Logo src={logo} alt="logo" />
            <TweetsCounter>{tweets} tweets</TweetsCounter>
            <FollowersCounter>{followers} followers</FollowersCounter>
            <Avatar src={avatar}></Avatar>
            {/* <FollowBtn type="button" onClick={() => onClick(id)}>
              Follow
            </FollowBtn> */}
            {isFollow ? (
              <FollowingBtn onClick={() => onClick(id)}>Following</FollowingBtn>
            ) : (
              <FollowBtn onClick={() => onClick(id)}>Follow</FollowBtn>
            )}
          </Card>
        ))}
    </>
  );
};
