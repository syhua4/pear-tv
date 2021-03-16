import React, { memo } from "react";

import { formatCastLayout } from "@/utils/movies";

import { CastGroupWrapper } from "./style";
export default memo(function MovieCasts(props) {
  const { info } = props;
  const directors = info && info.crew.filter((d) => d.job === "Director");
  return (
    <CastGroupWrapper>
      <div className="directors">
        <div className="credit-type">Directors</div>
        <div className="credit-lists">
          {directors && formatCastLayout(directors)}
        </div>
      </div>
      <div className="casts">
        <div className="credit-type">Casts</div>
        <div className="credit-lists">
          {info && formatCastLayout(info.cast)}
        </div>{" "}
      </div>
    </CastGroupWrapper>
  );
});
