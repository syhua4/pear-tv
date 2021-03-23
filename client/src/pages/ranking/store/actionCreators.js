import { getWeeklyPopular } from "@/services/ranking";
import * as actionTypes from "./constants";

const changeWeeklyPopularAction = (res) => ({
  type: actionTypes.CHANGE_WEEKLY_POPULAR_MOVIES,
  weeklyPopulars: res.results,
});

export const getWeeklyPopularAction = () => {
  return (dispatch) => {
    getWeeklyPopular().then((res) => {
      dispatch(changeWeeklyPopularAction(res));
    });
  };
};
