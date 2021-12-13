import React from 'react';
import styled from '@emotion/styled';

function Layout() {
  return <Styled.root>안녕하세요</Styled.root>;
}

export default Layout;

const Styled = {
  root: styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};
