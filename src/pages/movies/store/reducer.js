import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  movies: [],
  movieInfo: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MOVIES:
      return state.set("movies", action.movies);
    case actionTypes.CHANGE_MOVIE_INFO:
      return state.set("movieInfo", action.movieInfo);
    default:
      return state;
  }
}

export default reducer;
