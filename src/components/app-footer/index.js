import React, { memo } from "react";
import { ReactComponent as TMDBLogo } from "@/assets/image/TMDB.svg";
import { FooterWrapper } from "./style";
export default memo(function AppFooter() {
  return (
    <FooterWrapper>
      <div className="credit">
        <a href="https://www.themoviedb.org/">
          <TMDBLogo />
          <span>
            This product uses the TMDb API but is not endorsed or certified
            by TMDb.
          </span>
        </a>
      </div>
      <a
        className="copyright"
        href="https://syhua4.github.io/MyPortfolio_v1.0/"
      >
        Designed and Created by Shirley Huang
      </a>
    </FooterWrapper>
  );
});
