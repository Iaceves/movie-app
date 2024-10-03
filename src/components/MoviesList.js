import React from "react";
import { Card, CardMedia, Grid2, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMoviesList } from "../redux/features/movieSlice";

const MoviesList = () => {
  const moviesList = useSelector(getMoviesList);

  return (
    <div>
      <Grid2 sx={{ flexGrow: 1 }} container>
        <Grid2 item xs={12}>
          <Grid2 container justifyContent="center" spacing={3}>
            {moviesList?.Search?.map((item, index) => (
              <Grid2 key={index} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movies/${item.imdbID}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.Poster}
                      alt={item.Title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        {item.Title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        ({item.Year})
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default MoviesList;
