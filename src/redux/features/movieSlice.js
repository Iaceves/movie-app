import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
  },
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovie: (state) => {
      return state.movie;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

const selectMovies = (state) => state.movie;

export const getMoviesList = createSelector(
  [selectMovies],
  (movies) => movies.moviesList
);

//to create selector
const setMoviesError = (state) => state.movie;

export const ToManyResultError = createSelector(
  [setMoviesError],
  (movies) => movies.moviesList.Error
);

// const setMovieInfo = (state) => state.movie;

// export const movieInfo = createSelector(
//   [setMovieInfo],
//   (movieSelected) => movieSelected.movie
// );

export const { getMovies, setMovies, setMovie, getMovie } = movieSlice.actions;

export default movieSlice.reducer;
