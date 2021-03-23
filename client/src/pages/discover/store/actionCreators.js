import {
  getNowShowing,
  getUpcoming,
  getPopular,
} from "@/services/discover";

import * as actionTypes from "./constants";

const changeNowShowingAction = (res) => ({
  type: actionTypes.CHANGE_NOW_SHOWING,
  nowShowing: res.results,
});

const changeUpcomingAction = (res) => ({
  type: actionTypes.CHANGE_UPCOMING,
  upcoming: res.results,
});

const changePopularMoviesAction = (res) => ({
  type: actionTypes.CHANGE_POPULAR_MOVIE,
  popularMovies: res.results,
});
export const getNowShowingAction = () => {
  return (dispatch) => {
    getNowShowing().then((res) => {
      dispatch(changeNowShowingAction(res));
    });
  };
};

export const getUpcomingAction = () => {
  return (dispatch) => {
    getUpcoming().then((res) => {
      dispatch(changeUpcomingAction(res));
    });
  };
};

export const getPopularMoviesAction = () => {
  return (dispatch) => {
    getPopular().then((res) => {
      dispatch(changePopularMoviesAction(res));
    });
  };
};
