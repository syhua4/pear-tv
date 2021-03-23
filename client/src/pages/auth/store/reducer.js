import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultStatus = Map({
  userProfile: [],
  isLogin: false,
  error: "",
});

function reducer(state = defaultStatus, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS:
      return state.set("isLogin", action.isLogin);
    case actionTypes.CHANGE_USER:
      return state.set("userProfile", action.userProfile);
    case actionTypes.CHANGE_ERROR_MSG:
      return state.set("error", action.error);
    case actionTypes.CHANGE_FAVLIST:
      return state.setIn(["userProfile", "favlist"], action.favlist);
    default:
      return state;
  }
}

export default reducer;
