import React, { memo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getFavlistAction } from "@/pages/auth/store/actionCreators";
import { BannerWrapper } from "./style";

export default memo(function MovieInfoBanner(props) {
  const { info } = props;
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showInfoMsg, setShowInfoMsg] = useState(false);

  const { isLogin } = useSelector(
    (state) => ({
      isLogin: state.getIn(["user", "isLogin"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const formatTrailer = () => {
    if (info && !info.videos.results) return;
    const youtubeVideo =
      info && info.videos.results.filter((v) => v.site === "YouTube");
    if (youtubeVideo.length) {
      return `https://www.youtube.com/watch?v=${youtubeVideo[0].key}`;
    } else {
      return "#/";
    }
  };

  const handleFav = (item) => {
    console.log(isLogin);
    if (isLogin) {
      dispatch(getFavlistAction(item)).then(() => {
        setShowSuccessMsg(true);
        setTimeout(() => {
          setShowSuccessMsg(false);
        }, 1000);
      });
    } else {
      setShowInfoMsg(true);
      setTimeout(() => {
        setShowInfoMsg(false);
      }, 1000);
    }
  };

  return (
    <BannerWrapper
      showSuccessMsg={showSuccessMsg}
      showInfoMsg={showInfoMsg}
    >
      <div className="wrap-v2">
        <img
          className="banner-poster"
          src={
            info && info.poster_path
              ? process.env.REACT_APP_IMAGE_URL + info.poster_path
              : ""
          }
          alt=""
        />
        <div className="banner-info">
          <h1>{info && info.title}</h1>
          <div className="genres">
            {info && info.genres.map((genre) => genre.name).join(", ")}
          </div>
          <div>
            {((info &&
              info.production_countries[0] &&
              info.production_countries[0].iso_3166_1) ||
              "") +
              "/" +
              info.runtime +
              "min"}
          </div>
          <div className="date">{info && info.release_date}</div>

          <div className="rating">
            <div className="star-wrapper">
              <div
                className="active-stars"
                style={{
                  width: `${info && info.vote_average * 10}%`,
                }}
              ></div>
            </div>
            {`(${info && info.vote_average})`}
          </div>
          <div className="banner-info-sub">
            <div className="btns">
              <a
                className="btn-trailer"
                target="_blank"
                rel="noreferrer"
                href={formatTrailer()}
              >
                <i className="bi bi-camera-video-fill" /> trailer
              </a>
              <div
                className="btn-add-fav"
                onClick={() => {
                  handleFav(info);
                }}
              >
                <i className="bi bi-bookmark-heart-fill" /> Add to Fav
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="alert alert-success" role="alert">
        Movie Added!
      </div>
      <div className="alert alert-info" role="alert">
        Please login and start creating your watchlist!
      </div>
    </BannerWrapper>
  );
});
