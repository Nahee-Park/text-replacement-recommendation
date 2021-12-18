import React from 'react';
import { EmojiContext } from '../Context/Provider';

function useEmojiDatas() {
  return React.useContext(EmojiContext);
}

export default useEmojiDatas;
