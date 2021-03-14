import React, { memo, useState } from "react";

import { MovieGridWrapper } from "./style";
import { movieGenres } from "@/common/local-data";

export default memo(function MovieGrid(props) {
  const { movies } = props;
  const getGenresByIds = (ids) => {
    return movieGenres
      .filter((genre) => ids.includes(genre.id))
      .map((item) => item.name)
      .join(" ");
  };
  return (
    <MovieGridWrapper className="wrap-v2">
      <div className="grid-wrapper">
        {movies.map((item) => {
          return (
            <div className="grid-item" key={item.id}>
              <span className="rating">{item.vote_average}</span>
              <img
                src={process.env.REACT_APP_IMAGE_URL + item.poster_path}
                alt={item.title}
                className="movie-poster"
              />
              <div className="movie-title text-nowrap">{item.title}</div>
              <div className="grid-overlay">
                <img
                  src={
                    process.env.REACT_APP_IMAGE_URL + item.backdrop_path
                  }
                  alt={item.title}
                />
                <div className="movie-title">{item.title}</div>
                <div className="genres">
                  {getGenresByIds(item.genre_ids)}
                </div>
                <div className="description">{item.overview}</div>
                <div className="btn-fav">Add to my list</div>
              </div>
            </div>
          );
        })}
      </div>
    </MovieGridWrapper>
  );
});
