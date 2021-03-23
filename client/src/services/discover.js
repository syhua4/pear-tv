import { apiFetch as request } from "./request";

export function getNowShowing(language = "en-US", page = 1) {
  return request({
    url: "/movie/now_playing",
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      language,
      page,
    },
  });
}

export function getUpcoming(language = "en-US", page = 1) {
  return request({
    url: "/movie/upcoming",
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      language,
      page,
    },
  });
}

export function getPopular(language = "en-US", page = 1) {
  return request({
    url: "/movie/popular",
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      language,
      page,
    },
  });
}
