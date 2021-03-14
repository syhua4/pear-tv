import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMoviesAction } from "./store/actionCreators";

import { MoviesWrapper } from "./style";
import MovieFilter from "./child-cpns/movie-filter";
import MovieGrid from "./child-cpns/movie-grid";
import banner from "@/assets/image/banner5.jpeg";

export default memo(function Movies() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => ({
    movies: state.getIn(["movies", "movies"]),
  }));
  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <MoviesWrapper>
      <img
        src={banner}
        alt="Alice in Wonderland movie banner"
        className="movie-banner d-block w-100"
      />
      <MovieFilter />
      <MovieGrid movies={movies} />
    </MoviesWrapper>
  );
});
