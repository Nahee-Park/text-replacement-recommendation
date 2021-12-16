import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import AllResult from '../components/emoji/AllResult';
import SearchBar from '../components/Home/SearchBar';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <Styled.root>
      <Head>
        <title>텍스트 대치 이모티콘 추천 서비스</title>
        <meta name="description" content="상황에 필요한 텍스트 이모티콘들을 추천받으세요" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
      <AllResult />
    </Styled.root>
  );
};

export default Home;

const Styled = {
  root: styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};
