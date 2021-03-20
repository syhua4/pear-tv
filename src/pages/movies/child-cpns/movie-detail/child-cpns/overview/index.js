import React, { memo, useState } from "react";

import { formatCastLayout, formatAvatarURL } from "@/utils/movies";

import { OverviewWrapper } from "./style";

export default memo(function MovieOverview(props) {
  const { info } = props;
  const [readMore, setReadMore] = useState(-1);

  const directors =
    info && info.credits.crew.filter((ppl) => ppl.job === "Director");
  const casts = info && info.credits.cast.slice(0, 5 - directors.length);

  const reviews = info && info.reviews.results;

  let posters =
    info && info.images.posters.filter((img) => img.iso_639_1 === "en");
  if (posters.length >= 4) {
    posters = posters.splice(0, 4);
  }

  const toggleReadMore = (index) => {
    readMore === index ? setReadMore(-1) : setReadMore(index);
  };
  return (
    <OverviewWrapper>
      <h2 className="module-header ">Synopsis</h2>
      <div className="module-content synopsis">
        {info && info.overview}
      </div>
      <h2 className="module-header ">Casts</h2>
      <div className="module-content casts">
        <div className="directors">
          <div className="credit-type">Directors</div>
          <div className="credit-lists">{formatCastLayout(directors)}</div>
        </div>
        <div className="actors">
          <div className="credit-type">Casts</div>
          <div className="credit-lists">{formatCastLayout(casts)}</div>
        </div>
      </div>
      <h2 className="module-header">Gallery</h2>
      <div className="module-content gallery">
        <div className="col-backdrop">
          <img
            src={
              info && info.images.backdrops
                ? process.env.REACT_APP_IMAGE_URL +
                  info.images.backdrops[0].file_path
                : ""
            }
            alt={info && info.title}
          />
        </div>
        <div className="col-posters">
          {posters &&
            posters.map((i) => {
              return (
                <img
                  key={i.file_path}
                  src={process.env.REACT_APP_IMAGE_URL + i.file_path}
                  alt={info && info.title}
                />
              );
            })}
        </div>
      </div>
      <h2 className="module-header">Comments</h2>
      <div className="module-content reviews">
        {reviews &&
          reviews.map((c, index) => {
            return (
              <div className="review" key={c.author}>
                <div className="reviewer">
                  <img
                    src={formatAvatarURL(c.author_details.avatar_path)}
                    alt={c.author}
                  />
                  <div className="reviewer-detail">
                    <div className="reviewer-name">{c.author}</div>
                    <div className="date">
                      {c.created_at.split("T")[0]}
                    </div>
                  </div>
                </div>
                <div className="review-wrapper">
                  <div
                    className={`review-content ${
                      readMore === index ? "expand" : ""
                    }`}
                  >
                    {c.content}
                  </div>
                  <span
                    className="readmore"
                    onClick={(e) => toggleReadMore(index)}
                  >
                    {readMore === index ? "Read Less" : "Read More"}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </OverviewWrapper>
  );
});
