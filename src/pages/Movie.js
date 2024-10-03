import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import useStyles from "../styles";
import {
  getMoviesList,
  setMovie,
  getMovie,
} from "../redux/features/movieSlice";

const Movie = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moviesList = useSelector(getMoviesList);
  const selectedMovie = moviesList.Search.find((mov) => {
    return mov.imdbID === id;
  });
  // dispatch(setMovie(selectedMovie));

  useEffect(() => {
    dispatch(setMovie(selectedMovie));
    // dispatch(getMovie(selectedMovie));
  }, [selectedMovie, dispatch]);

  return (
    <section className={classes.section}>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <div>
        <Typography align="left" variant="h2" gutterBottom component="h2">
          {selectedMovie.Title}
        </Typography>
        <Typography align="left" variant="h5" gutterBottom component="h5">
          Year: {selectedMovie.Year}
        </Typography>
        <Typography align="left" variant="body1" gutterBottom component="p">
          Type: {selectedMovie.Type}
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go back
        </Button>
      </div>
    </section>
  );
};

export default Movie;
