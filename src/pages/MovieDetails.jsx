import { getMovieDetails } from 'api/TMDBApi';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    getMovieDetails(movieId)
      .then(movie => {
        setMovie(movie);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const defaultImg = `https://orangeheatingsupplies.co.uk/wp-content/uploads/2023/02/image-coming-soon-placeholder.png`;

  return (
    <div>
      {isLoading && <p>loading...</p>}
      <Link to={location.state?.from || '/'}>
        <button type="button">Go back</button>
      </Link>
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={400}
            alt={movie.original_title}
          />
          <div>
            <h1>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>
            <p>
              <span>Rating: </span>
              {Math.round(movie.vote_average * 10) / 10}
            </p>
            <p>{movie.overview}</p>
            <p>
              <span>Genres: </span>
              {movie.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
      )}
      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
      <hr />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
