import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { postRegisterAction } from "@/pages/auth/store/actionCreators";

import { useForm } from "react-hook-form";
import { LoginWrapper } from "./style";
import { useHistory } from "react-router";

export default memo(function Register() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [showError, setShowError] = useState(false);

  const { errorMsg, isLogin } = useSelector(
    (state) => ({
      errorMsg: state.getIn(["user", "error"]),
      isLogin: state.getIn(["user", "isLogin"]),
    }),
    shallowEqual
  );

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  });
  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    if (isLogin) {
      history.push("/");
    }
  }, [history, isLogin]);

  const onSubmit = (data) => {
    dispatch(postRegisterAction(data)).then(() => {
      setTimeout(() => {
        if (errorMsg) {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 1000);
        }
      }, 2000);
    });
  };

  return (
    <LoginWrapper showError={showError}>
      <div className="eclipse" />
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: "Name is required" })}
          />
          <i className="bi bi-person" />

          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
        </div>

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
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <i className="bi bi-key" />

          {errors.password && (
            <span className="error-msg">{errors.password.message}</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            ref={register({
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          <i className="bi bi-key" />

          {errors.password2 && (
            <span className="error-msg">{errors.password2.message}</span>
          )}
        </div>
        <input type="submit" className="btn" />
        <div className="alternate">
          Already have an account?
          <a href="/login">Login</a>
        </div>
      </form>
      <div className="alert alert-danger" role="alert">
        {errorMsg}
      </div>
    </LoginWrapper>
  );
});
