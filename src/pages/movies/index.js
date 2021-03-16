import React, { memo, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getMovieByIdAction,
  getMoviesAction,
} from "./store/actionCreators";

import { MoviesWrapper } from "./style";
import MovieFilter from "./child-cpns/movie-filter";
import MovieGrid from "./child-cpns/movie-grid";
import banner from "@/assets/image/banner5.jpeg";

export default memo(function Movies() {
  const dispatch = useDispatch();
  const { movies } = useSelector(
    (state) => ({
      movies: state.getIn(["movies", "movies"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  const applyFilter = useCallback(
    (sortBy, genre, year) => {
      dispatch(getMoviesAction(sortBy, genre, year));
    },
    [dispatch]
  );
  return (
    <MoviesWrapper>
      <img
        src={banner}
        alt="Alice in Wonderland movie banner"
        className="movie-banner d-block w-100"
      />
      <MovieFilter applyFilter={applyFilter} />
      <MovieGrid movies={movies} />
    </MoviesWrapper>
  );
});
