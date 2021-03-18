import React, { memo } from "react";
import { useHistory } from "react-router";

import { getGenresByIds } from "@/utils/movies";

import { MovieGridWrapper } from "./style";

export default memo(function MovieGrid(props) {
  const { movies } = props;

  let history = useHistory();
  const handleClick = (id) => {
    history.push(`/movies/${id}`);
  };

  const handleFav = (e) => {
    e.stopPropagation();
    console.log("add");
  };
  return (
    <MovieGridWrapper className="wrap-v2">
      <div className="grid-wrapper">
        {movies.map((item) => {
          return (
            <div
              className="grid-item"
              key={item.id}
              onClick={(e) => handleClick(item.id)}
            >
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
                <div className="btn-fav" onClick={(e) => handleFav(e)}>
                  Add to my list
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MovieGridWrapper>
  );
});
