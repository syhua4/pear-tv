import Discover from "@/pages/discover";
import Movies from "@/pages/movies";
import Tvs from "@/pages/tvs";
import Rankings from "@/pages/rankings";

const routes = [
  {
    path: "/",
    component: Discover,
    exact: true,
  },
  {
    path: "/movies",
    component: Movies,
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
