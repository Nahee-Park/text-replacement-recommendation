import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { debounce } from 'lodash';
interface InputStyleProps {
  height: string;
  width: string;
}
interface InputProps extends InputStyleProps {
  type: string;
  name: string;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  submitHandler: () => void;
}

const Input = ({ type, name, height, width, setValue, submitHandler }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceOnChange();
  };

  const debounceOnChange = debounce(() => {
    setValue(inputRef?.current?.value);
  }, 300);

  return (
    <Styled.Form onSubmit={submitHandler} height={height} width={width}>
      <input className="input" type={type} name={name} onChange={changeHandler} ref={inputRef} />
    </Styled.Form>
  );
};
export default Input;

const Styled = {
  Form: styled.form<InputStyleProps>`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background: #e5e5e5;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
      width: 95%;
      height: 100%;
      background: #e5e5e5;
      border-radius: 12px;
      border: 0 solid white;
    }
  `,
};
