import axios from 'axios';
import { AbstractApi } from './AbstractApi';

const BASE_URL = 'https://emoji-recommendation.web.app';

export type EmojiType = {
  imageUrl: string | undefined;
  rawText: string;
};

export type GetEmojiApiResponse = {
  keyword: string;
  emoji: EmojiType[];
};

export class EmojiApi extends AbstractApi {
  public static async GetEmojiApi(searchinput: string): Promise<GetEmojiApiResponse | any> {
    const URL = BASE_URL + this.buildPath('emoji') + this.buildQuery({ words: searchinput });
    try {
      const response = await axios.get<GetEmojiApiResponse>(URL);

      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
