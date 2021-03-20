import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: calc(100vh - 81px);
  position: relative;
  overflow-y: hidden;
  .eclipse {
    width: 70vw;
    height: 140vh;
    border-radius: 50%;
    background-image: linear-gradient(to right, #ffb400, #ef4238);
    transform: translate(-30%, -5%);
  }
  .login-form {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    img {
      width: 65px;
      height: 65px;
    }
    span {
      display: block;
      color: #999;
      margin: 10px 0 20px;
    }
    .input-wrapper {
      position: relative;
      width: 270px;
      height: 40px;
      margin-bottom: 20px;
      input {
        display: inline-block;
        height: 40px;
        width: 100%;
        padding: 0 40px;
        border: 1px solid #ccc;
        font-size: 14px;
        border-radius: 30px;
        background-color: #faf8fa;
        overflow: hidden;
        color: #333;
      }
      i {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1;
      }
    }
    .login-btn {
      text-align: center;
      color: #fff;
      margin: 30px 0 10px;
      width: 170px;
      background-image: linear-gradient(105deg, #ffb400, #ef4238);
      padding: 5px 20px;
      border-radius: 30px;
      cursor: pointer;
    }
    .register {
      color: #ccc;
      a {
        color: #ffb400;
        display: inline-block;
        margin-left: 10px;
      }
    }
  }
`;
