import request from "./request";

export function getSearchResult(query, page = 1) {
  return request({
    url: "/search/movie",
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      query,
      page,
    },
  });
}
