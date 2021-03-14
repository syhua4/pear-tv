import { combineReducers } from "redux-immutable";
import { reducer as discoverReducer } from "@/pages/discover/store";
import { reducer as moviesReducer } from "@/pages/movies/store";

const reducers = combineReducers({
  discover: discoverReducer,
  movies: moviesReducer,
});

export default reducers;
