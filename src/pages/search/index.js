import React, { memo, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getSearchResultAction } from "@/pages/search/store/actionCreators";
import { getGenresByIds } from "@/utils/movies";

import SearchBox from "@/components/search-box";
import { SearchWrapper } from "./style";
import { useHistory, useLocation } from "react-router";
import Pagination from "@/components/pagination";

export default memo(function Search() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { results, totalPage } = useSelector(
    (state) => ({
      results: state.getIn(["search", "movieResults"]),
      totalPage: state.getIn(["search", "totalPage"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getSearchResultAction(location.state.query));
  }, [dispatch, location]);

  const showResults = () => {
    if (results && results.length) {
      return results.map((r) => {
        return (
          <div className="result-item" key={r.id}>
            <img
              onClick={(e) => {
                history.push(`/movies/${r.id}`);
              }}
              src={process.env.REACT_APP_IMAGE_URL + r.poster_path}
              alt={r.title}
            />

            <div className="result-info">
              <h2
                onClick={(e) => {
                  history.push(`/movies/${r.id}`);
                }}
              >
                {r.title}
              </h2>

              <div className="rating">{r.vote_average}</div>
              <div className="genres text-nowrap">
                {getGenresByIds(r.genre_ids)}
              </div>
              <div className="release">{r.release_date}</div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="no-results">
          Sorry, we couldn't find any results for "{location.state.query}"
        </div>
      );
    }
  };
  const showPagination = () => {
    if (totalPage > 1) {
      return (
        <Pagination totalPage={totalPage} requestPage={requestPage} />
      );
    }
  };

  const requestPage = useCallback(
    (page) => {
      dispatch(getSearchResultAction(location.state.query, page));
    },
    [dispatch, location]
  );

  return (
    <SearchWrapper>
      <div className="search-box-wrapper">
        <SearchBox width={"50vw"} />
      </div>
      <div className="search-results wrap-v2">{showResults()}</div>
      {showPagination()}
    </SearchWrapper>
  );
});
