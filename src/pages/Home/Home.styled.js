import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Text = styled.p`
  text-align: center;
  color: black;
  font-size: 20px;
  line-height: 1;
  margin-top: 62px;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    font-size: 36px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 36px;
  color: orangered;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  :hover {
    color: #471ca9;
  }
`;
