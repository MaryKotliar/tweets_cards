import { ButtonStyled } from './Button.styled';
export const Button = ({ text, onClick, type, styled }) => {
  return (
    <>
      <ButtonStyled onClick={onClick} type={type} styled={styled}>
        {text}
      </ButtonStyled>
    </>
  );
};
