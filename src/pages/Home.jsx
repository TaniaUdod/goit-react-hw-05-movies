import { getTrending } from 'api/TMDBApi';
import MovieList from 'components/MovieList';
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
    <div>
      <h1>Trending today</h1>
      {isLoading && <p>loading...</p>}
      <MovieList movies={movies} />
      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </div>
  );
};

export default Home;
