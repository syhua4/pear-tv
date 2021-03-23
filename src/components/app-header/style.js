import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  .navbar {
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;

    .nav-items {
      display: flex;
      .navbar-brand {
        width: 109px;
        height: 80px;
        background-position: -10px -10px;
        cursor: pointer;
      }
      .navbar-nav {
        height: 80px;
        line-height: 80px;
      }
      .nav-link {
        color: #333;
        font-size: 18px;
        font-weight: 600;
        padding: 0 1rem;

        &.active {
          background-color: #ef4238;
          color: #fff;
        }
      }
    }
  }

  .user-avatar {
    position: relative;
    box-sizing: content-box;
    width: 56px;
    margin-left: 10px;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
      border-left: 1px solid #d8d8d8;
      border-right: 1px solid #d8d8d8;
      .caret {
        transform: rotate(180deg);
      }
      .user-avatar-dropdown {
        display: block;
      }
    }
    .avatar-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      background-position: ${(props) =>
        props.isLogin ? "-130px -110px" : "-70px -110px"};
    }

    .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 5px;
      vertical-align: middle;
      border-top: 5px solid #666;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      transition: all 0.2s ease;
    }
    .user-avatar-dropdown {
      width: 56px;
      position: absolute;
      top: 75px;
      right: -1px;
      border: 1px solid #d8d8d8;
      border-top-color: #fff;
      display: none;
      padding: 0 10px;
      color: #6c757d;
      background-color: #fff;
      box-sizing: inherit;
      li {
        padding-bottom: 5px;
      }
    }
  }
`;
