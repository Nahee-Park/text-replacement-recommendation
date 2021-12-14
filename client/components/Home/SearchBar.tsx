import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import Button from '../common/Button';
import { EmojiApi } from '../../lib/EmojiApi';
import Input from '../common/Input';
import useDebounce from '../../hooks/useDebounce';

function SearchBar() {
  const searchInput = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [postValue, setPostValue] = useState('');
  const getResult = async () => {
    const result = await EmojiApi.GetEmojiApi('자기야 사랑해');
    console.log(result);
  };

  const clickHandler = () => {
    console.log('버튼 클릭!');
    // 여기서 axios요청 , 그리고 debounce로 요청
  };

  useEffect(() => {
    if (searchValue) {
      console.log('searchValue', searchValue);
      EmojiApi.GetEmojiApi(searchValue);
    }
  }, [useDebounce({ value: searchValue, delay: 500 })]);

  return (
    <Styled.SearchBar>
      <Input type="text" name="searchbar_input" height="45px" width="100%" value={searchValue} setValue={setSearchValue} />
      <Button size="md" label="search" color="#757476" onClick={clickHandler} />
    </Styled.SearchBar>
  );
}

export default SearchBar;

const Styled = {
  SearchBar: styled.div`
    display: flex;
  `,
};
