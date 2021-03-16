import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getMoviesAction } from "./store/actionCreators";

import { MoviesWrapper } from "./style";
import MovieFilter from "./child-cpns/movie-filter";
import MovieGrid from "./child-cpns/movie-grid";
import banner from "@/assets/image/banner5.jpeg";
import Pagination from "../../components/pagination";

export default memo(function Movies() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [sortByGenre, setSortByGenre] = useState("all");
  const [sortByYear, setSortByYear] = useState("all");

  const { movies, totalPage } = useSelector(
    (state) => ({
      movies: state.getIn(["movies", "movies"]),
      totalPage: state.getIn(["movies", "totalPage"]),
    }),
    shallowEqual
  );
  const pagerRef = useRef();
  const resetPagination = () => pagerRef.current.resetPager();

  useEffect(() => {
    dispatch(getMoviesAction());
    console.log(pagerRef.current);
  }, [dispatch]);

  const applyFilter = useCallback(
    (sortBy, genre, year) => {
      setSortBy(sortBy);
      setSortByGenre(genre);
      setSortByYear(year);
      dispatch(getMoviesAction(sortBy, genre, year, 1));
      resetPagination();
    },
    [dispatch]
  );

  const requestPage = useCallback(
    (page) => {
      dispatch(getMoviesAction(sortBy, sortByGenre, sortByYear, page));
    },
    [dispatch, sortByYear, sortBy, sortByGenre]
  );
  return (
    <MoviesWrapper>
      <img
        src={banner}
        alt="Alice in Wonderland movie banner"
        className="movie-banner d-block w-100"
      />
      <MovieFilter applyFilter={applyFilter} />
      <MovieGrid movies={movies} />
      <Pagination
        totalPage={totalPage}
        requestPage={requestPage}
        ref={pagerRef}
      />
    </MoviesWrapper>
  );
});
