import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  weeklyPopulars: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_WEEKLY_POPULAR_MOVIES:
      return state.set("weeklyPopulars", action.weeklyPopulars);
    default:
      return state;
  }
}

export default reducer;
