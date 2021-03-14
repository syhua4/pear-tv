import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  .navbar {
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;

    .nav-items {
      display: flex;
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

  .search-form {
    width: 235px;
    position: relative;
    .input-search {
      display: inline-block;
      height: 40px;
      width: 100%;
      padding: 0 40px 0 20px;
      border: 1px solid #ccc;
      font-size: 14px;
      border-radius: 30px;
      background-color: #faf8fa;
      overflow: hidden;
      color: #333;
    }
    .input-search-btn {
      display: inline-block;
      background-color: #ef4238;
      border-radius: 20px;
      width: 40px;
      height: 40px;
      border-style: none;
      border: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-image: url(${require("@/assets/image/search.png")
        .default});
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
    img {
      width: 40px;
      height: 40px;
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
