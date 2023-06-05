import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Wrap } from './TweetsStyled';
import { UsersList } from 'components/UsersList/UsersList';

export const Tweets = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <Wrap>
      <Button type="button" onClick={goBack}>
        {' '}
        Go back{' '}
      </Button>
      <UsersList />
    </Wrap>
  );
};

Tweets.propTypes = {
  onClick: PropTypes.func,
};