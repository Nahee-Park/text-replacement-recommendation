import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Button from '../common/Button';
import { EmojiApi } from '../../lib/EmojiApi';
import Input from '../common/Input';
import useEmojiDatas from '../../hooks/useEmojiDatas';

function SearchBar() {
  const { setEmojiData } = useEmojiDatas();
  const [searchValue, setSearchValue] = useState<string | undefined>('');

  const clickHandler = () => {
    if (searchValue) {
      EmojiApi.GetEmojiApi(searchValue);
    }
  };

  useEffect(() => {
    if (searchValue) {
      EmojiApi.GetEmojiApi(searchValue);
    }
  }, [searchValue]);

  return (
    <Styled.SearchBar>
      <Styled.Input>
        <Input
          type="text"
          name="searchbar_input"
          height="35px"
          width="1000px"
          setValue={setSearchValue}
          submitHandler={clickHandler}
        />
      </Styled.Input>
      <Styled.Button>
        <Button size="sm" label="search" color="#757476" onClick={clickHandler} />
      </Styled.Button>
    </Styled.SearchBar>
  );
}

export default SearchBar;

const Styled = {
  SearchBar: styled.div`
    display: flex;
    margin-top: 44px;
  `,
  Input: styled.div`
    margin-right: 0.5rem;
  `,
  Button: styled.div``,
};
