import { getMovieCredits } from 'api/TMDBApi';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Img, Item, List, Text, Title } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    getMovieCredits(movieId)
      .then(cast => {
        setCast(cast);
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
      {isLoading && <Loader />}

      <List>
        {cast.map(({ id, profile_path, name, character }) => (
          <Item key={id}>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              alt={name}
              width="200px"
            />
            <Title>{name}</Title>
            <Text>{character}</Text>
          </Item>
        ))}
      </List>

      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </div>
  );
};

export default Cast;
