import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;
