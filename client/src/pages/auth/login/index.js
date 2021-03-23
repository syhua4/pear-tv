import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { postLoginAction } from "@/pages/auth/store/actionCreators";
import { useForm } from "react-hook-form";

import { LoginWrapper } from "./style";
import { useHistory } from "react-router";
export default memo(function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  const [showError, setShowError] = useState(false);

  const { errorMsg, isLogin } = useSelector(
    (state) => ({
      errorMsg: state.getIn(["user", "error"]),
      isLogin: state.getIn(["user", "isLogin"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (isLogin) {
      history.push("/");
    }
  }, [history, isLogin]);

  const onSubmit = (data) => {
    dispatch(postLoginAction(data)).then(() => {
      setTimeout(() => {
        if (errorMsg) {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 1000);
        }
      }, 1000);
    });
  };
  return (
    <LoginWrapper showError={showError}>
      <div className="eclipse" />
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <i className="bi bi-envelope" />

          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({
              required: "Password is required",
            })}
          />
          <i className="bi bi-key" />

          {errors.password && (
            <span className="error-msg">{errors.password.message}</span>
          )}
        </div>
        <input type="submit" className="btn" />
        <div className="alternate">
          New user?
          <a href="/register">Register</a>
        </div>
      </form>
      <div className="alert alert-danger" role="alert">
        {errorMsg}
      </div>
    </LoginWrapper>
  );
});
