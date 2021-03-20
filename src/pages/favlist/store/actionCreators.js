import * as actionTypes from "./constants";

const changeFavlistAction = (list) => ({
  type: actionTypes.CHANGE_FAVLIST,
  favlist: list,
});
export const getFavlistAction = (item, action) => {
  return (dispatch, getState) => {
    const favlist = getState().getIn(["favlist", "favlist"]);
    let list;
    if (action === "remove") {
      const updatedFavlist = favlist.filter((i) => i.id !== item.id);
      list = updatedFavlist;
    } else {
      const checkList = favlist.find((i) => i.id === item.id);
      checkList ? (list = favlist) : (list = [...favlist, item]);
    }
    dispatch(changeFavlistAction(list));
    return Promise.resolve();
  };
};
