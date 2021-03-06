import React, { memo } from "react";

import { formatImgUrl } from "@/utils/movies";

import { GalleryWrapper } from "./style";

export default memo(function MovieGallery(props) {
  const { info } = props;
  console.log(info);
  return (
    <GalleryWrapper>
      {info &&
        info.backdrops.map((i) => {
          return (
            <img
              key={i.file_path}
              src={formatImgUrl(i.file_path)}
              alt={i.file_path}
            />
          );
        })}
    </GalleryWrapper>
  );
});
