import React, { memo } from "react";
import { LoginWrapper } from "./style";
import avatar from "@/assets/image/default_avatar.png";
export default memo(function Login() {
  return (
    <LoginWrapper>
      <div className="eclipse" />
      <div className="login-form">
        <img src={avatar} alt="default avatar" />
        <span>Login below to get started</span>
        <div className="input-wrapper">
          <input type="text" placeholder="Email" />
          <i class="bi bi-envelope" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Password" />
          <i class="bi bi-key" />
        </div>
        <div className="login-btn">Login</div>
        <div className="register">
          New user?
          <a href="/#">Register</a>
        </div>
      </div>
    </LoginWrapper>
  );
});
