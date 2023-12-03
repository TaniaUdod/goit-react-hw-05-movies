import { getTrending } from 'api/TMDBApi';
import MoviesList from 'components/MovieList/MoviesList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTrendingMovies = () => {
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
    };
    getTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <p>loading...</p>}
      <MoviesList movies={movies} />
      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </main>
  );
};

export default Home;
