import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  nowShowing: [],
  upcoming: [],
  popularMovies: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_NOW_SHOWING:
      return state.set("nowShowing", action.nowShowing);
    case actionTypes.CHANGE_UPCOMING:
      return state.set("upcoming", action.upcoming);
    case actionTypes.CHANGE_POPULAR_MOVIE:
      return state.set("popularMovies", action.popularMovies);
    default:
      return state;
  }
}

export default reducer;
