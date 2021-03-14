import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  movies: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MOVIES:
      return state.set("movies", action.movies);
    default:
      return state;
  }
}

export default reducer;
