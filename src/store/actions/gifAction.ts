import axios from 'axios';
import { Dispatch } from 'redux';
import { EGifsActionTypes, GifAction } from '../../types/gif';
import { GIPHY_GIF_API, GIPHY_API_KEY, GIPHY_GIF_FETCH_LIMIT } from '../../constants';

export const fetchGifs = (searchValue: string, pageIndex: number) => {
  return async (dispatch: Dispatch<GifAction>): Promise<void> => {
    try {
      dispatch({ type: EGifsActionTypes.FETCH_GIFS });

      const params = {
        api_key: GIPHY_API_KEY,
        q: searchValue,
        limit: GIPHY_GIF_FETCH_LIMIT,
        offset: pageIndex * GIPHY_GIF_FETCH_LIMIT,
      };
      const response = await axios.get(GIPHY_GIF_API, { params });

      dispatch({ type: EGifsActionTypes.FETCH_GIFS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: EGifsActionTypes.FETCH_GIFS_ERROR, payload: 'Failed Fetching Gifs' });
    }
  };
};
