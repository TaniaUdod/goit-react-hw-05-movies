import { getMovieDetails } from 'api/TMDBApi';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Button,
  Container,
  LinkInfo,
  List,
  Span,
  TitleText,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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
      <Link to={backLink.current}>
        <Button type="button">Go back</Button>
      </Link>

      {isLoading && <Loader />}

      {movie && (
        <>
          <Container>
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
                <Span>Rating: </Span>
                {Math.round(movie.vote_average * 10) / 10}
              </p>
              <TitleText>Overview: </TitleText>
              <p>{movie.overview}</p>
              <p>
                <Span>Genres: </Span>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </Container>

          <hr />
          <h2>Additional information</h2>
          <List>
            <li>
              <LinkInfo to="cast">Cast</LinkInfo>
            </li>
            <li>
              <LinkInfo to="reviews">Reviews</LinkInfo>
            </li>
          </List>
          <hr />
          <Outlet />
        </>
      )}

      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </div>
  );
};

export default MovieDetails;
