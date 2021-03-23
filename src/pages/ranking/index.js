import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getWeeklyPopularAction } from "@/pages/ranking/store/actionCreators";
import { getGenresByIds, formatScore, formatImgUrl } from "@/utils/movies";

import { RankingWrapper } from "./style";
import { useHistory } from "react-router";

export default memo(function Rankings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { weeklyPopular } = useSelector(
    (state) => ({
      weeklyPopular: state.getIn(["ranking", "weeklyPopulars"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getWeeklyPopularAction());
  }, [dispatch]);

  const getTopTenList = () => {
    if (weeklyPopular) {
      let popSort = weeklyPopular
        .sort(
          (a, b) => parseFloat(b.popularity) - parseFloat(a.popularity)
        )
        .slice(0, 10)
        .sort(
          (a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average)
        );
      return popSort;
    }
    return;
  };
  getTopTenList();
  return (
    <RankingWrapper className="wrap-v2">
      <span>
        Listing Rule: This list represents the top 10 weekly popular
        movies, ordered based on its voting
      </span>
      <div className="ranking-list">
        {getTopTenList().map((item, idx) => {
          return (
            <div className="ranking-item " key={item.id}>
              <div className="rank-index sprite">{idx + 1}</div>

              <img
                src={formatImgUrl(item.poster_path)}
                alt={item.title}
                onClick={(e) => {
                  history.push(`/movies/${item.id}`);
                }}
              />

              <div className="item-info">
                <div className="item-info-left">
                  <h2
                    onClick={(e) => {
                      history.push(`/movies/${item.id}`);
                    }}
                  >
                    {item.title}
                  </h2>

                  <div className="genres">
                    {getGenresByIds(item.genre_ids)}
                  </div>
                  <div className="release">{item.release_date}</div>
                </div>
                <div className="item-info-right vote">
                  {formatScore(item.vote_average)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </RankingWrapper>
  );
});
