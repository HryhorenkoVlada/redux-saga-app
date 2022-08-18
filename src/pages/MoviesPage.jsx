import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

import MovieCard from '../components/MovieCard/MovieCard';
import { fetchMovies } from '../redux/reducers/movieSlice';

import './MoviesPage.scss';

const MoviesPage = () => {
  const { movies, error, loading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [searchedValue, setSearchedValue] = useState('');
  useEffect(() => {
    console.log(localStorage);
    if (movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, []);

  const handleChange = (e) => {
    setSearchedValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    if (searchedValue) {
      dispatch(fetchMovies(searchedValue));
    }
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="movies-page__container">
      <div className="movies-page__search-block">
        <TextField
          id="outlined-name"
          //label="Search"
          placeholder="Search..."
          color="success"
          value={searchedValue}
          onChange={handleChange}
          className="movies-page__search"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
            },
          }}
        />
        <button
          className="btn btn_primary movies-page__btn"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {error ? (
        <h1 className="movies-page__error">{error}</h1>
      ) : (
        <div className="cards__wrapper">
          {movies?.map((movie, index) => (
            <MovieCard movie={movie} key={`${movie.imdbID}_${index}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
