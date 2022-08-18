import { all, fork } from 'redux-saga/effects';

import { loadMoviesWatcher } from './loadMovies';

export function* rootSaga() {
  yield all([fork(loadMoviesWatcher)]);
}
