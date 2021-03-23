import React, { Fragment, memo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { formatImgUrl } from "@/utils/movies";
import { getFavlistAction } from "@/pages/auth/store/actionCreators";

import { FavListWrapper } from "./style";

export default memo(function FavList() {
  const [info, setInfo] = useState({});
  const [showSide, setShowSide] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { favlist } = useSelector(
    (state) => ({
      favlist: state.getIn(["user", "userProfile", "favlist"]),
    }),
    shallowEqual
  );

  const showFavlist = () => {
    console.log(favlist);
    if (favlist) {
      return favlist.map((item) => {
        return (
          <div
            className="favlist-item"
            key={item.id}
            onClick={(e) => {
              displayInfo(item);
            }}
          >
            <img src={formatImgUrl(item.backdrop_path)} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="more-info">
              <div className="genres text-nowrap">
                {item.genres[0].name}
              </div>
              <div className="date">{item.release_date.split("-")[0]}</div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="no-results">
          Browse
          <span
            onClick={(e) => {
              history.push("/movies");
            }}
          >
            movies
          </span>
          and start to build your watchlist!
        </div>
      );
    }
  };
  const displayInfo = (item) => {
    setInfo(item);
    setShowSide(true);
  };

  const toggleSide = () => {
    setShowSide(false);
    setInfo({});
  };

  const handleUnfav = () => {
    dispatch(getFavlistAction(info, "remove"));
    toggleSide();
  };
  return (
    <FavListWrapper className="wrap-v2" showSide={showSide}>
      <div className="favlist-header">
        <h2>Watchlist</h2>
        <span>All your favourite movies in one place</span>
      </div>
      <div className="favlist">
        <div className="favlist-content">{showFavlist()}</div>
        <div className="movie-info">
          <div
            className="close-btn"
            onClick={(e) => {
              toggleSide();
            }}
          >
            X
          </div>
          {Object.keys(info).length && (
            <Fragment>
              <img
                onClick={(e) => {
                  history.push(`/movies/${info.id}`);
                }}
                src={info && formatImgUrl(info.backdrop_path)}
                alt={info && info.title}
              />
              <h2
                onClick={(e) => {
                  history.push(`/movies/${info.id}`);
                }}
              >
                {info && info.title}
              </h2>
              <span>{info && info.release_date.split("-")[0]}</span>
              <div className="genres text-nowrap">
                {info &&
                  info.genres.map((i) => {
                    return <span key={i.name}>{i.name}</span>;
                  })}
              </div>
              <div className="overview">{info && info.overview}</div>

              <div className="btn-unfav" onClick={(e) => handleUnfav()}>
                <i className="bi bi-bookmark-heart" /> Unfav
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </FavListWrapper>
  );
});
