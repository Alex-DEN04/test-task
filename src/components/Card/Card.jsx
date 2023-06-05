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
  const makeString = (value) => {
    const string = value.toString()
    const firstPart = string.slice(0, 3);
    const secondPart = string.slice(3, string.length);
    const res = `${firstPart},${secondPart}`
    return res
  }

  return (
    <>
      {items &&
        items.map(({ id, tweets, followers, avatar, isFollow }) => (
          <Card key={id}>
            <Logo src={logo} alt="logo" />
            <TweetsCounter>{tweets} tweets</TweetsCounter>
            <FollowersCounter>{makeString(followers)} followers</FollowersCounter>
            <Avatar src={avatar}></Avatar>
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
