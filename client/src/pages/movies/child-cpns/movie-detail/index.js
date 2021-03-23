import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getMovieByIdAction } from "@/pages/movies/store/actionCreators";

import Tabs from "@/components/tabs";
import { MovieDetailWrapper } from "./style";
import Banner from "./child-cpns/banner";
import MovieOverview from "./child-cpns/overview";
import MovieGallery from "./child-cpns/gallery";
import MovieSimilar from "./child-cpns/similar";
import MovieCasts from "./child-cpns/casts";

export default memo(function MovieDetail() {
  let { id } = useParams();

  const dispatch = useDispatch();

  const { movieInfo } = useSelector(
    (state) => ({
      movieInfo: state.getIn(["movies", "movieInfo"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getMovieByIdAction(id));
  }, [dispatch, id]);

  return (
    <MovieDetailWrapper>
      <Banner info={Object.keys(movieInfo).length && movieInfo} />
      <div className="content-wrapper wrap-v2">
        <div className="row">
          <div className="left-content col-sm-12 col-md-8 ">
            <Tabs>
              <div label="Overview">
                <MovieOverview
                  info={Object.keys(movieInfo).length && movieInfo}
                />
              </div>
              <div label="Casts">
                <MovieCasts
                  info={Object.keys(movieInfo).length && movieInfo.credits}
                />
              </div>
              <div label="Gallery">
                <MovieGallery
                  info={Object.keys(movieInfo).length && movieInfo.images}
                />
              </div>
            </Tabs>
          </div>
          <div className="col-sm-12 col-md-4 right-content">
            <MovieSimilar
              info={
                Object.keys(movieInfo).length && movieInfo.similar.results
              }
            />
          </div>
        </div>
      </div>
    </MovieDetailWrapper>
  );
});
