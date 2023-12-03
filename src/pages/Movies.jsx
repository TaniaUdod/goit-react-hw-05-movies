import React, { useEffect, useState } from 'react';
import { getSearchMovies } from 'api/TMDBApi';
import MoviesList from 'components/MovieList/MoviesList';
import { useParams, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getSearchMoviesByQuery = query => {
      setIsLoading(true);

      getSearchMovies(query)
        .then(searchMovies => {
          setMovies(searchMovies);

          if (searchMovies.length === 0) {
            Notify.failure(
              `Sorry, there are no movies matching your search query. Please try again.`
            );
            setIsLoading(false);
            return;
          }

          if (searchMovies.length > 0) {
            Notify.success(`Hooray! We found ${searchMovies.length} movies.`);
          }
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    const query = searchParams.get('query') || '';
    getSearchMoviesByQuery(query);
  }, [movieId, searchParams]);

  const handleSearchSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <SearchForm onSubmit={handleSearchSubmit} />
      {isLoading && <p>loading...</p>}
      {movies && <MoviesList movies={movies} />}
      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </main>
  );
};

export default Movies;
