import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  movies: [],
  totalPage: 1,
  movieInfo: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MOVIES:
      return state.set("movies", action.movies);
    case actionTypes.CHANGE_TOTAL_PAGE:
      return state.set("totalPage", action.totalPage);
    case actionTypes.CHANGE_MOVIE_INFO:
      return state.set("movieInfo", action.movieInfo);
    default:
      return state;
  }
}

export default reducer;
