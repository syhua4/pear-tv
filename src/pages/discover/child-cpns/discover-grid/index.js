import React, { memo } from "react";
import { useHistory } from "react-router";

import { formatScore } from "@/utils/movies";

import { DiscoverGridWrapper } from "./style";

export default memo(function DiscoverGrid(props) {
  const { title, items, count } = props;
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/movies/${id}`);
  };
  const itemsModified = items.slice(0, count);

  return (
    <DiscoverGridWrapper className="wrap-v2">
      <h2 className="grid-title">{title}</h2>
      <div className="grid-wrapper">
        {itemsModified.map((item) => {
          return (
            <div
              className="grid-item"
              key={item.id}
              onClick={(e) => handleClick(item.id)}
            >
              <img
                src={process.env.REACT_APP_IMAGE_URL + item.poster_path}
                alt={item.title}
                className="movie-poster"
              />
              <div className="poster-overlay">
                <div className="movie-info">
                  <div className="movie-title text-nowrap">
                    {item.title}
                  </div>
                  <div className="movie-score">
                    {formatScore(item.vote_average)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DiscoverGridWrapper>
  );
});
