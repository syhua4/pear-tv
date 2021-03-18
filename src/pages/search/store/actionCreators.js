import * as actionTypes from "./constants";

import { getSearchResult } from "@/services/search";

const changeSearchResultAction = (res) => ({
  type: actionTypes.CHANGE_SEARCH_MOVIE_RESULT,
  movieResults: res.results,
});

const changeResultPage = (res) => ({
  type: actionTypes.CHANGE_RESULT_PAGES,
  totalPage: res.total_pages,
});

export const getSearchResultAction = (query, page) => {
  return (dispatch) => {
    getSearchResult(query, page).then((res) => {
      dispatch(changeSearchResultAction(res));
      dispatch(changeResultPage(res));
    });
  };
};
