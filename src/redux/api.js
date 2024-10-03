import axios from "axios";

const API_ENDPOINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (movieName) => {
  return await axios.get(`${API_ENDPOINT}&s=${movieName}`);
};

export const fetchMovie = async (movieId) => {
  return await axios.get(`${API_ENDPOINT}&i=${movieId}`);
};
