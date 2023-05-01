import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Text = styled.p`
  text-align: center;
  color: black;
  font-size: 36px;
  margin-top: 62px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 48px;
  color: orangered;
  font-weight: 500;
  :hover {
    color: #471ca9;
  }
`;
