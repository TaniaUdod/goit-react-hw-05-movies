import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '6f033a77847b5b83d2b4d12dccf6a045';

export const getTrending = async () => {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
};
