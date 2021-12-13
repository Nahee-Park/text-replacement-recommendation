import React, { SetStateAction } from 'react';
import styled from '@emotion/styled';

interface InputStyleProps {
  height: string;
  width: string;
}
interface InputProps extends InputStyleProps {
  type: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
}

function Input({ type, name, height, width, value, setValue }: InputProps) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };
  return (
    <Styled.Input
      height={height}
      width={width}
      type={type}
      name={name}
      value={value}
      onChange={(e) => changeHandler(e)}
    />
  );
}

export default Input;

const Styled = {
  Input: styled.input<InputStyleProps>`
    background: #e5e5e5;
    border-radius: 12px;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    border: 0 solid white;
  `,
};
