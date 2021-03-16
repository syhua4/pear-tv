import Discover from "@/pages/discover";
import Movies from "@/pages/movies";
import Tvs from "@/pages/tvs";
import Rankings from "@/pages/rankings";
import MovieDetail from "../pages/movies/child-cpns/movie-detail";

const routes = [
  {
    path: "/",
    component: Discover,
    exact: true,
  },
  {
    path: "/movies",
    component: Movies,
    exact: true,
  },
  {
    path: "/movies/:id",
    component: MovieDetail,
  },
  {
    path: "/tvs",
    component: Tvs,
  },
  {
    path: "/rankings",
    component: Rankings,
  },
];

export default routes;
