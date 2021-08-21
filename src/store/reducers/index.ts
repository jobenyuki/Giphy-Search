import { combineReducers } from 'redux';
import { gifReducer } from './gifReducer';

export const rootReducer = combineReducers({
  gif: gifReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
