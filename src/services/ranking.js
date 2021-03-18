import request from "./request";

export function getWeeklyPopular() {
  return request({
    url: "/trending/movie/week",
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
    },
  });
}
