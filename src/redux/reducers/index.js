import { combineReducers } from '@reduxjs/toolkit';

import movieReducer from '../reducers/movieSlice';

export const rootReducer = combineReducers({
  movie: movieReducer,
});
