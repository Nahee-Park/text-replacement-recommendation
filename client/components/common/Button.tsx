import React from 'react';
import styled from '@emotion/styled';
export type sizeType = 'sm' | 'md' | 'lg';

interface ButtonStyleProps {
  color: string;
  size: sizeType;
}
interface ButtonProps extends ButtonStyleProps {
  label: string;
  onClick: () => void;
}

function Button({ label, color, size, onClick }: ButtonProps) {
  return (
    <Styled.Button color={color} size={size} onClick={onClick}>
      {label}
    </Styled.Button>
  );
}

export default Button;

const Styled = {
  Button: styled.button<ButtonStyleProps>`
    border-radius: 12px;
    background: ${({ color }) => color};
    ${({ size }) => ('sm' ? 'width: 90px; height: 35px;' : 'md' ? 'width: 106px; height: 45px;' : 'width: 130px; height: 55px;')}
    color: #FFFFFF;
    size: 21px;
    font-family: Roboto Mono Light for Powerline;
    line-height: 25px;
    cursor: pointer;
    &:hover {
      filter: brightness(115%);
    }
  `,
};
