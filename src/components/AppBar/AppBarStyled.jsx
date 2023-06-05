import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 10px;
  margin: 0;
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;

export const Navigate = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 15px;
  width: 1170px;
  margin: 0;
`;
