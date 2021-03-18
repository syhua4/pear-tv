import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  movieResults: [],
  showResults: [],
  totalPage: 1,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_MOVIE_RESULT:
      return state.set("movieResults", action.movieResults);
    case actionTypes.CHANGE_RESULT_PAGES:
      return state.set("totalPage", action.totalPage);
    default:
      return state;
  }
}

export default reducer;
