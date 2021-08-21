export type TGifElementTypes = {
  id: string;
  images: {
    original: {
      url: string;
    };
    preview_gif: {
      url: string;
    };
  };
};

export type TGifsTypes = {
  data: TGifElementTypes[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
};

export interface IGifState {
  gifs: TGifsTypes | null;
  loading: boolean;
  error: null | string;
}

export enum EGifsActionTypes {
  FETCH_GIFS = 'FETCH_GIFS',
  FETCH_GIFS_SUCCESS = 'FETCH_GIFS_SUCCESS',
  FETCH_GIFS_ERROR = 'FETCH_GIFS_ERROR',
}

interface IFetchGifsAction {
  type: EGifsActionTypes.FETCH_GIFS;
}

interface IFetchGifsSuccessAction {
  type: EGifsActionTypes.FETCH_GIFS_SUCCESS;
  payload: TGifsTypes | null;
}

interface IFetchGifsErrorAction {
  type: EGifsActionTypes.FETCH_GIFS_ERROR;
  payload: string;
}

export type GifAction = IFetchGifsAction | IFetchGifsSuccessAction | IFetchGifsErrorAction;
