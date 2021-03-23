import {
  postUserRegister,
  postUserLogin,
  postEditFavlist,
} from "@/services/auth";
import * as actionTypes from "./constants";

const changeUserProfileAction = (res) => ({
  type: actionTypes.CHANGE_USER,
  userProfile: res,
});

const changeLoginStatus = (res) => ({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  isLogin: res,
});

const changeErrorMsg = (res) => ({
  type: actionTypes.CHANGE_ERROR_MSG,
  error: res,
});

const changeFavlistAction = (list) => ({
  type: actionTypes.CHANGE_FAVLIST,
  favlist: list,
});

export const postLoginAction = (data) => {
  return (dispatch) => {
    postUserLogin(data).then((res) => {
      dispatch(changeErrorMsg(""));
      if (res.status === 200) {
        dispatch(changeUserProfileAction(res.user));
        dispatch(changeLoginStatus(true));
      } else {
        dispatch(changeErrorMsg(res.msg));
      }
    });
    return Promise.resolve();
  };
};

export const postRegisterAction = (name, email, password) => {
  return (dispatch) => {
    postUserRegister(name, email, password).then((res) => {
      dispatch(changeErrorMsg(""));
      if (res.status === 200) {
        dispatch(changeUserProfileAction(res.user));
        dispatch(changeLoginStatus(true));
      } else {
        dispatch(changeErrorMsg(res.msg));
      }
    });
    return Promise.resolve();
  };
};

export const getLogoutAction = () => {
  return (dispatch) => {
    dispatch(changeErrorMsg(""));
    dispatch(changeUserProfileAction([]));
    dispatch(changeLoginStatus(false));
    return Promise.resolve();
  };
};

export const getFavlistAction = (item, action) => {
  return async (dispatch, getState) => {
    const favlist = getState().getIn(["user", "userProfile", "favlist"]);
    const email = getState().getIn(["user", "userProfile", "email"]);
    let list;
    if (action === "remove") {
      const updatedFavlist = favlist.filter((i) => i.id !== item.id);
      list = updatedFavlist;
    } else {
      const checkList = favlist.find((i) => i.id === item.id);
      if (checkList) {
        list = favlist;
      } else {
        list = [...favlist, item];
      }
    }
    dispatch(changeFavlistAction(list));
    await postEditFavlist({ email, favlist: list });
    return Promise.resolve();
  };
};
