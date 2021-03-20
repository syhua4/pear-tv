import Discover from "@/pages/discover";
import Movies from "@/pages/movies";
import Favlist from "@/pages/favlist";
import Rankings from "@/pages/ranking";
import Search from "@/pages/search";
import Login from "@/pages/auth/login";
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
    path: "/search",
    component: Search,
  },
  {
    path: "/user/:id",
    component: Favlist,
  },
  {
    path: "/rankings",
    component: Rankings,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default routes;
