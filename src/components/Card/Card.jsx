import { useState } from 'react';

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

export const UserCard = ({ items }) => {
    const [following, setFollowing] = useState(true)
    const [followers, setFollowers] = useState()
    const onClickHandler = (value) => {
        
    }

  return (
    <>
      {items && items.map(item => (
        <Card key={item.id}>
          <Logo src={logo} alt="" />
          <TweetsCounter>{item.tweets} tweets</TweetsCounter>
          <FollowersCounter>{item.followers} followers</FollowersCounter>
              <Avatar src={item.avatar}></Avatar>
              <FollowBtn onClick={onClickHandler}>Follow</FollowBtn>
          {/* {following ? <FollowingBtn>Following</FollowingBtn> : <FollowBtn>Follow</FollowBtn>} */}
        </Card>
      ))}
    </>
  );
};