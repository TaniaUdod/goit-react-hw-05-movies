import React, { useEffect, useState } from 'react';
import { getSearchMovies } from 'api/TMDBApi';
import MoviesList from 'components/MovieList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);

    getSearchMovies(query)
      .then(searchMovies => {
        if (searchMovies.length === 0) {
          Notify.failure(
            `Sorry, there are no movies matching your search query. Please, try again.`
          );
          setIsLoading(false);
          return;
        }

        setMovies(searchMovies);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <p>loading...</p>}
      {movies && <MoviesList movies={movies} />}
      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </div>
  );
};

export default Movies;
