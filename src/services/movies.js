import request from "./request";

export function getMovies(
  sort_by = "popularity.desc",
  genre = "all",
  year = "all",
  page = 1,
  language = "en-US"
) {
  return request({
    url: "/discover/movie",
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      sort_by,
      with_genres: genre !== "all" ? genre : null,
      year: year !== "all" ? year : null,
      language,
      page,
      "vote_count.gte": sort_by === "vote_average.desc" ? 100 : null,
    },
  });
}

export function getMovieById(id) {
  return request({
    url: `/movie/${id}`,
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      append_to_response: "videos,images,reviews,similar,credits",
    },
  });
}
