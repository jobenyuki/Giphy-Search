import { GifAction, EGifsActionTypes, IGifState } from '../../types/gif';

const initialState: IGifState = {
  gifs: null,
  loading: false,
  error: null,
};

export const gifReducer = (state = initialState, action: GifAction): IGifState => {
  switch (action.type) {
    case EGifsActionTypes.FETCH_GIFS:
      return { gifs: null, loading: true, error: null };
    case EGifsActionTypes.FETCH_GIFS_SUCCESS:
      return { gifs: action.payload, loading: false, error: null };
    case EGifsActionTypes.FETCH_GIFS_ERROR:
      return { gifs: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
