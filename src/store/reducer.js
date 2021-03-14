import { combineReducers } from "redux-immutable";
import { reducer as discoverReducer } from "@/pages/discover/store";

const reducers = combineReducers({
  discover: discoverReducer,
});

export default reducers;
