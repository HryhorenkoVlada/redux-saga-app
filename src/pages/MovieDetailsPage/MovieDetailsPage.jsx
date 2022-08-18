import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './MovieDetailsPage.scss';

const MovieDetailsPage = () => {
  const { movies } = useSelector((state) => state.movie);
  const { id } = useParams();
  console.log(movies, id);
  const movie = movies.find((prod) => prod.imdbID === id);
  return (
    <div className="movie-details__container">
      <div className="movie-details__img">
        <img src={movie.Poster} alt="poster" />
      </div>
      <div className="movie-details__content">
        <h1 className="movie-details__title">{movie.Title}</h1>
        <p className="movie-details__details">
          <span>Year: </span>
          {movie.Year}
        </p>
        <p className="movie-details__details">
          <span>Type: </span>
          {movie.Type}
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
