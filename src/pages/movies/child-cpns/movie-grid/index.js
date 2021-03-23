import React, { memo } from "react";
import { useHistory } from "react-router";

import { getGenresByIds, formatImgUrl } from "@/utils/movies";

import { MovieGridWrapper } from "./style";

export default memo(function MovieGrid(props) {
  const { movies } = props;
  let history = useHistory();

  return (
    <MovieGridWrapper className="wrap-v2">
      <div className="grid-wrapper">
        {movies.map((item) => {
          return (
            <div
              className="grid-item"
              key={item.id}
              onClick={(e) => {
                history.push(`/movies/${item.id}`);
              }}
            >
              <span className="rating">{item.vote_average}</span>
              <img
                src={formatImgUrl(item.poster_path)}
                alt={item.title}
                className="movie-poster"
              />
              <div className="movie-title text-nowrap">{item.title}</div>
              <div className="grid-overlay">
                <img
                  src={formatImgUrl(item.backdrop_path)}
                  alt={item.title}
                />
                <div className="movie-title">{item.title}</div>
                <div className="genres ">
                  {getGenresByIds(item.genre_ids)}
                </div>
                <div className="description">{item.overview}</div>
              </div>
            </div>
          );
        })}
      </div>
    </MovieGridWrapper>
  );
});
