// import { UserCard } from 'components/Card/Card';
import { Button } from './TweetsStyled';
import { UsersList } from 'components/UsersList/UsersList';

export const Tweets = () => {
  return (
    <section>
      <Button> Go back </Button>
      <UsersList />
    </section>
  );
};
