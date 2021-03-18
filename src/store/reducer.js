import { combineReducers } from "redux-immutable";
import { reducer as discoverReducer } from "@/pages/discover/store";
import { reducer as moviesReducer } from "@/pages/movies/store";
import { reducer as searchReducer } from "@/pages/search/store";

const reducers = combineReducers({
  discover: discoverReducer,
  movies: moviesReducer,
  search: searchReducer,
});

export default reducers;
