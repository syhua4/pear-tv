import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getNowShowingAction,
  getUpcomingAction,
  getPopularMoviesAction,
} from "./store/actionCreators";

import banner from "@/assets/image/banner.jpg";
import { DiscoverWrapper } from "./style";
import DiscoverGrid from "./child-cpns/discover-grid";

function Discover(props) {
  const dispatch = useDispatch();
  const { nowShowing, upcoming, popularMovies } = useSelector(
    (state) => ({
      nowShowing: state.getIn(["discover", "nowShowing"]),
      upcoming: state.getIn(["discover", "upcoming"]),
      popularMovies: state.getIn(["discover", "popularMovies"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getNowShowingAction());
    dispatch(getUpcomingAction());
    dispatch(getPopularMoviesAction());
  }, [dispatch]);

  return (
    <DiscoverWrapper>
      <img
        src={banner}
        alt="Raya and the last dragon banner"
        className="img-fluid banner"
      />
      <DiscoverGrid title="Now Showing" items={nowShowing} count={12} />
      <DiscoverGrid title="Coming Soon" items={upcoming} count={12} />
      <DiscoverGrid
        title="Popular On PearTV"
        items={popularMovies}
        count={12}
      />
    </DiscoverWrapper>
  );
}

export default memo(Discover);
