import React from 'react';

import { Link, Navigate } from './AppBarStyled';

export const AppBar = () => {
  return (
    <Navigate>
      <Link to="/">Home</Link>
      <Link to="tweets">Tweets</Link>
    </Navigate>
  );
};
