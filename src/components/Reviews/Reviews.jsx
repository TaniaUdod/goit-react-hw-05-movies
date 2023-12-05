import { getMovieReviews } from 'api/TMDBApi';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data, Img, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    getMovieReviews(movieId)
      .then(reviews => {
        setReviews(reviews);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const defaultImg = `https://bitslog.files.wordpress.com/2013/01/unknown-person1.gif`;

  const formatCreatedAt = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      {isLoading && <Loader />}

      {reviews.length !== 0 ? (
        <List>
          {reviews.map(
            ({
              id,
              author,
              author_details: { avatar_path },
              content,
              created_at,
            }) => (
              <li key={id}>
                <Img
                  src={
                    avatar_path
                      ? `https://image.tmdb.org/t/p/w500/${avatar_path}`
                      : defaultImg
                  }
                  alt={author}
                  width="50px"
                />
                <h3>{author}</h3>
                <Data>{formatCreatedAt(created_at)}</Data>
                <p>{content}</p>
              </li>
            )
          )}
        </List>
      ) : (
        <h3>No reviews</h3>
      )}

      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </div>
  );
};

export default Reviews;
