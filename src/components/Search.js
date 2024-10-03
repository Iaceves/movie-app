import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";
import { getMovies } from "../redux/features/movieSlice";
import { ToManyResultError } from "../redux/features/movieSlice";

const Search = () => {
  const [name, setName] = useState("Spider");

  const classes = useStyles();

  const dispatch = useDispatch();

  const error = useSelector(ToManyResultError);

  useEffect(() => {
    dispatch(getMovies(name));
  }, [name, dispatch]);

  return (
    <>
      <h2 className={classes.title}>Movie Search App</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </>
  );
};

export default Search;
