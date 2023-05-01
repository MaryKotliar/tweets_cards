import styled from 'styled-components';
export const ButtonStyled = styled.button`
  padding: 14px 28px;
  margin: 0 auto;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ styled }) => {
    switch (styled) {
      case 'pink':
        return '#EBD8FF';
      case 'green':
        return '#5CD3A8';
      default:
        return '#FFFFFF';
    }
  }};
`;
