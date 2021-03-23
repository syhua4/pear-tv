import React from "react";

const Discover = React.lazy((_) => import("@/pages/discover"));
const Movies = React.lazy((_) => import("@/pages/movies"));
const Favlist = React.lazy((_) => import("@/pages/favlist"));
const Rankings = React.lazy((_) => import("@/pages/ranking"));
const Search = React.lazy((_) => import("@/pages/search"));
const Login = React.lazy((_) => import("@/pages/auth/login"));
const Register = React.lazy((_) => import("@/pages/auth/register"));
const MovieDetail = React.lazy((_) =>
  import("@/pages/movies/child-cpns/movie-detail")
);

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
  {
    path: "/register",
    component: Register,
  },
];

export default routes;
