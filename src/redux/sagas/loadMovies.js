import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchMoviesApi } from '../api/movieApi';
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from '../reducers/movieSlice';

function* loadMoviesWorker({ payload }) {
  try {
    const response = yield call(fetchMoviesApi, payload);
    if (!response.data?.Error) {
      yield put({
        type: fetchMoviesSuccess.type,
        payload: response.data.Search,
      });
    } else {
      yield put({ type: fetchMoviesError.type, payload: response.data.Error });
    }
  } catch (e) {
    yield put({ type: fetchMoviesError.type, payload: e.message });
  }
}

export function* loadMoviesWatcher() {
  yield takeLatest(fetchMovies.type, loadMoviesWorker);
}
