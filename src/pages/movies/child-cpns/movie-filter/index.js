import React, { memo } from "react";

import { movieGenres } from "@/common/local-data";
import { FilterWrapper } from "./style";
const now = new Date().getUTCFullYear();
const years = Array(now - (now - 11))
  .fill("")
  .map((v, idx) => now - idx);

export default memo(function MovieFilter() {
  return (
    <FilterWrapper>
      <div className="filter wrap-v2 row">
        <div className="order-by col-12 col-lg-2">
          <p>Order By</p>
          <div className="filter-items">
            <span className="active" tag="popularity.desc">
              Popularity
            </span>
            <span tag="release_date.desc">Newest</span>
            <span tag="vote_average.desc">Rating</span>
          </div>
        </div>
        <div className="genres col-12 col-lg-6">
          <p>Genres</p>
          <div className="filter-items">
            <span className="active">All</span>
            {movieGenres.map((genre) => {
              return (
                <span key={genre.id} tag={genre.id}>
                  {genre.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="year col-12 col-lg-4">
          <p>Year</p>
          <div className="filter-items d-flex flex-wrap">
            <span className="active">All</span>
            {years.map((year, index) => {
              return <span key={index}>{year}</span>;
            })}
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
});
