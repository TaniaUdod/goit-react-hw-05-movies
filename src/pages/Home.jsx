import { getTrending } from 'api/TMDBApi';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MovieList/MoviesList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    getTrending()
      .then(trendingMovies => {
        setMovies(trendingMovies);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </div>
  );
};

export default Home;
