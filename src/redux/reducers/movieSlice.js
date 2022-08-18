import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.movies = action.payload;
    },
    fetchMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  movieSlice.actions;

export default movieSlice.reducer;
