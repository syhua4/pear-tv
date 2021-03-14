import * as actionTypes from "./constants";

import { getMovies } from "@/services/movies";

const changeMoviesAction = (res) => ({
  type: actionTypes.CHANGE_MOVIES,
  movies: res.results,
});

export const getMoviesAction = () => {
  return (dispatch) => {
    getMovies().then((res) => {
      dispatch(changeMoviesAction(res));
    });
  };
};
