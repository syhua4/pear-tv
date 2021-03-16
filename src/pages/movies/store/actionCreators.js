import * as actionTypes from "./constants";

import { getMovies, getMovieById } from "@/services/movies";

const changeMoviesAction = (res) => ({
  type: actionTypes.CHANGE_MOVIES,
  movies: res.results,
});

const changeMovieByIdAction = (res) => ({
  type: actionTypes.CHANGE_MOVIE_INFO,
  movieInfo: res,
});

export const getMoviesAction = (sortBy, genre, year) => {
  return (dispatch) => {
    getMovies(sortBy, genre, year).then((res) => {
      dispatch(changeMoviesAction(res));
    });
  };
};

export const getMovieByIdAction = (id) => {
  return (dispatch) => {
    getMovieById(id).then((res) => {
      dispatch(changeMovieByIdAction(res));
    });
  };
};
