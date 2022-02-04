import axios from 'axios';
export const apiCredits = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=166aeb1e62f46939f496859b559d3511`
  );
};
export const apiDetails = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=166aeb1e62f46939f496859b559d3511`
  );
};
export const apiReviews = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=166aeb1e62f46939f496859b559d3511`
  );
};
export const apiTrand = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/trending/all/week?api_key=166aeb1e62f46939f496859b559d3511'
  );
};
export const apiQuery = async query => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=166aeb1e62f46939f496859b559d3511&query=${query}`
  );
};
