import React from 'react';
import { useLocation } from 'react-router-dom';
import { Img, Item, Link, List, Text } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImg = `https://orangeheatingsupplies.co.uk/wp-content/uploads/2023/02/image-coming-soon-placeholder.png`;

  return (
    <List>
      {movies.map(
        ({ id, original_title, title, poster_path, release_date }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                width={400}
                alt={original_title}
              />
              <Text>
                {title} ({release_date.slice(0, 4)})
              </Text>
            </Link>
          </Item>
        )
      )}
    </List>
  );
};

export default MovieList;
