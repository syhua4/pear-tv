import axios from "axios";

import { TIMEOUT, CHANGE_ORIGIN } from "./config";

const createService = (url) => {
  const instance = axios.create({
    baseURL: url,
    timeout: TIMEOUT,
    changeOrigin: CHANGE_ORIGIN,
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );

  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log("request error");
            break;
          case 401:
            console.log("unauthorized");
            break;
          default:
            console.log("other error");
        }
      }
      return err;
    }
  );
  return instance;
};

const apiFetch = createService(process.env.REACT_APP_BASE_API);
const authFetch = createService(process.env.REACT_APP_AUTH_API);

export { apiFetch, authFetch };
