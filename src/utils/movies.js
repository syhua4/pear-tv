import { movieGenres } from "@/common/local-data";

export const formatCastLayout = (castList) => {
  return (
    castList &&
    castList.map((cast) => {
      return (
        <div className="cast" key={cast.id}>
          <img
            src={process.env.REACT_APP_IMAGE_URL + cast.profile_path}
            alt={cast.name}
          />
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
    return process.env.REACT_APP_IMAGE_URL + link;
  }
};

export const getGenresByIds = (ids) => {
  return movieGenres
    .filter((genre) => ids.includes(genre.id))
    .map((item) => item.name)
    .join(" ");
};
