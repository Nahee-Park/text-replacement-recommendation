import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Button from '../common/Button';
import { EmojiApi } from '../../lib/EmojiApi';
import Input from '../common/Input';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const getResult = async () => {
    const result = await EmojiApi.GetEmojiApi('자기야 사랑해');
    console.log(result);
  };
  useEffect(() => {
    getResult();
  }, []);
  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <Styled.SearchBar>
      <Input
        type="text"
        name="searchbar_input"
        height="45px"
        width="100%"
        value={searchValue}
        setValue={setSearchValue}
      />
      <Button size="md" label="search" color="#757476" />
    </Styled.SearchBar>
  );
}

export default SearchBar;

const Styled = {
  SearchBar: styled.div`
    display: flex;
  `,
};
