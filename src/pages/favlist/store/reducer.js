import { Map } from "immutable";

import * as actionTypes from "./constants";
const defaultState = Map({
  favlist: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FAVLIST:
      return state.set("favlist", action.favlist);

    default:
      return state;
  }
}

export default reducer;
