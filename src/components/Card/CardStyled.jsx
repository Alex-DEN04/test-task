import styled from '@emotion/styled';

import fon from '../../images/picture.png';

export const Card = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 440px;
  padding: 20px;
  margin: 0;
  margin-bottom: 15px;
  background-image: url(${fon}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: 50% 6%;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  ::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    z-index: 3;
    top: 214px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  /* ::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    z-index: 5;
    top: 178px;
    left: auto;
    
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid;
    border-color: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    background-color: #5736A3;
    } */
`;

export const Logo = styled.img`
  align-self: flex-start;
  width: 76px;
  height: 22px;
`;

export const Avatar = styled.img`
  position: absolute;
  z-index: 999;
  top: 178px;
  left: auto;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #ebd8ff;
  background-color: #5736a3;
  border-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-color: #5736a3;
`;
export const TweetsCounter = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  margin-top: 264px;
  color: #ebd8ff;
`;

export const FollowersCounter = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  margin-top: 16px;
  color: #ebd8ff;
`;
export const FollowingBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-top: 26px;
  color: #373737;
  text-transform: uppercase;
  background-color: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  :hover,
  :focus {
    background-color: #31ae80;
  }
`;

export const FollowBtn = styled.button`
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-top: 26px;
  color: #373737;
  text-transform: uppercase;
background-color: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  :hover,
  :focus {
    background-color: #ceb6e8;
  }
`