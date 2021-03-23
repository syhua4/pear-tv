import { authFetch as request } from "./request";

export function postUserRegister(data) {
  return request({
    method: "POST",
    url: "/register",
    data,
  });
}

export function postUserLogin(data) {
  return request({
    method: "POST",
    url: "/login",
    data,
  });
}

export function logout() {
  return request({
    url: "/logout",
  });
}

export function postEditFavlist(data) {
  return request({
    method: "POST",
    url: "/editUser",
    data,
  });
}
