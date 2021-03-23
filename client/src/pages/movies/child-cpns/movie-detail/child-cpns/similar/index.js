import React, { Fragment, memo } from "react";
import { useHistory } from "react-router";

import { formatImgUrl } from "@/utils/movies";

export default memo(function SimilarMovies(props) {
  const { info } = props;
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/movies/${id}`);
  };
  return (
    <Fragment>
      <h2>More Like This</h2>
      {Object.keys(info).length &&
        info.map((movie) => {
          return (
            <div
              className="sim-movie"
              key={movie.id}
              onClick={(e) => handleClick(movie.id)}
            >
              <img
                src={formatImgUrl(
                  movie.poster_path
                    ? movie.poster_path
                    : movie.backdrop_path
                )}
                alt={movie.title}
              />
              <div className="movie-title text-nowrap">{movie.title}</div>
            </div>
          );
        })}
    </Fragment>
  );
});
