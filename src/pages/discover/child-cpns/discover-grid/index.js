import React, { Fragment, memo } from "react";

import { DiscoverGridWrapper } from "./style";

export default memo(function DiscoverGrid(props) {
  const { title, items, count } = props;
  const itemsModified = items.slice(0, count);
  const formatScore = (score) => {
    let integer = ("" + score).split(".")[0] + ".";
    let decimal = ("" + score).split(".")[1] || 0;
    return (
      <Fragment>
        <span className="integer">{integer}</span>
        <span className="decimal">{decimal}</span>
      </Fragment>
    );
  };
  return (
    <DiscoverGridWrapper className="wrap-v2">
      <h2 className="grid-title">{title}</h2>
      <div className="grid-wrapper">
        {itemsModified.map((item) => {
          return (
            <div className="grid-item" key={item.id}>
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
