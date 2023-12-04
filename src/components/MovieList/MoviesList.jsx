import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImg = `https://orangeheatingsupplies.co.uk/wp-content/uploads/2023/02/image-coming-soon-placeholder.png`;

  return (
    <ul>
      {movies.map(
        ({ id, original_title, title, poster_path, release_date }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                width={400}
                alt={original_title}
              />
              <p>
                {title} ({release_date.slice(0, 4)})
              </p>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default MovieList;
