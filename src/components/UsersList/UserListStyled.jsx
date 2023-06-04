import styled from '@emotion/styled';

export const Cards = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 15px;
  color: #ffff;
  text-transform: uppercase;
  background-color: #a593e3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  :hover,
  :focus {
    background-color: #6c5ca4;
  }
`;
