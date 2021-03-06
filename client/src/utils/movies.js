import { movieGenres } from "@/common/local-data";
import loadingImg from "@/assets/image/loading.png";

import { Fragment } from "react";

export const formatImgUrl = (url) => {
  if (url) {
    return process.env.REACT_APP_IMAGE_URL + url;
  } else {
    return loadingImg;
  }
};

export const formatCastLayout = (castList) => {
  return (
    castList &&
    castList.map((cast) => {
      return (
        <div className="cast" key={cast.id}>
          <img src={formatImgUrl(cast.profile_path)} alt={cast.name} />
          <div className="cast-info">
            <div className="cast-name text-nowrap">{cast.name}</div>
            {cast.character ? (
              <div className="cast-role text-nowrap">{cast.character}</div>
            ) : null}
          </div>
        </div>
      );
    })
  );
};

export const formatAvatarURL = (link) => {
  if (!link) return;
  if (link.lastIndexOf("/http", 0) === 0) {
    return link.substring(1);
  } else {
    return formatImgUrl(link);
  }
};

export const getGenresByIds = (ids) => {
  if (!ids) return;
  return movieGenres
    .filter((genre) => ids.includes(genre.id))
    .map((item) => item.name)
    .join(" ");
};

export const formatScore = (score) => {
  let integer = ("" + score).split(".")[0] + ".";
  let decimal = ("" + score).split(".")[1] || 0;
  return (
    <Fragment>
      <span className="integer">{integer}</span>
      <span className="decimal">{decimal}</span>
    </Fragment>
  );
};
