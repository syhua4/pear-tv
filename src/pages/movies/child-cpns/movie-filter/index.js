import React, { memo, useEffect, useState } from "react";

import { movieGenres } from "@/common/local-data";
import { FilterWrapper } from "./style";

export default memo(function MovieFilter(props) {
  const { applyFilter } = props;

  const [sortBy, setSortBy] = useState("popularity.desc");
  const [sortByGenre, setSortByGenre] = useState("all");
  const [sortByYear, setSortByYear] = useState("all");

  useEffect(() => {
    applyFilter(sortBy, sortByGenre, sortByYear);
  }, [applyFilter, sortBy, sortByYear, sortByGenre]);

  const setFilter = (filterType, tag) => {
    switch (filterType) {
      case "sortBy":
        setSortBy(tag);
        break;
      case "genre":
        setSortByGenre(tag);
        break;
      case "year":
        setSortByYear(tag);
        break;
      default:
        break;
    }
  };
  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 11))
    .fill("")
    .map((v, idx) => now - idx);
  return (
    <FilterWrapper>
      <div className="filter wrap-v2 row">
        <div className="order-by col-12 col-lg-2">
          <p>Order By</p>
          <div className="filter-items">
            <span
              onClick={(e) => {
                setFilter("sortBy", "popularity.desc");
              }}
              className={sortBy === "popularity.desc" ? "active" : ""}
              tag="popularity.desc"
            >
              Popularity
            </span>
            <span
              onClick={(e) => {
                setFilter("sortBy", "release_date.desc");
              }}
              className={sortBy === "release_date.desc" ? "active" : ""}
              tag="release_date.desc"
            >
              Newest
            </span>
            <span
              onClick={(e) => {
                setFilter("sortBy", "vote_average.desc");
              }}
              className={sortBy === "vote_average.desc" ? "active" : ""}
              tag="vote_average.desc"
            >
              Rating
            </span>
          </div>
        </div>
        <div className="genres col-12 col-lg-6">
          <p>Genres</p>
          <div className="filter-items">
            <span
              className={sortByGenre === "all" ? "active" : ""}
              onClick={(e) => {
                setFilter("genre", "all");
              }}
            >
              All
            </span>
            {movieGenres.map((genre) => {
              return (
                <span
                  onClick={(e) => {
                    setFilter("genre", genre.id);
                  }}
                  className={genre.id === sortByGenre ? "active" : ""}
                  key={genre.id}
                  tag={genre.id}
                >
                  {genre.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="year col-12 col-lg-4">
          <p>Year</p>
          <div className="filter-items d-flex flex-wrap">
            <span
              className={sortByYear === "all" ? "active" : ""}
              onClick={(e) => {
                setFilter("year", "all");
              }}
            >
              All
            </span>
            {years.map((year, index) => {
              return (
                <span
                  key={index}
                  onClick={(e) => {
                    setFilter("year", year);
                  }}
                  className={year === sortByYear ? "active" : ""}
                >
                  {year}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
});
