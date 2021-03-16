import * as actionTypes from "./constants";

import { getMovies, getMovieById } from "@/services/movies";

const changeMoviesAction = (res) => ({
  type: actionTypes.CHANGE_MOVIES,
  movies: res.results,
});

const changeTotalPage = (res) => ({
  type: actionTypes.CHANGE_TOTAL_PAGE,
  totalPage: res.total_pages,
});

const changeMovieByIdAction = (res) => ({
  type: actionTypes.CHANGE_MOVIE_INFO,
  movieInfo: res,
});

export const getMoviesAction = (sortBy, genre, year, page) => {
  return (dispatch) => {
    getMovies(sortBy, genre, year, page).then((res) => {
      dispatch(changeMoviesAction(res));
      dispatch(changeTotalPage(res));
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
