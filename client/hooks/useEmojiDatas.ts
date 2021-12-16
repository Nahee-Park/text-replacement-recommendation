import React from 'react';
import { EmojiContext } from '../pages/Provider';

function useEmojiDatas() {
  return React.useContext(EmojiContext);
}

export default useEmojiDatas;
