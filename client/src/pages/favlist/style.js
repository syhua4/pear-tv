import styled from "styled-components";

export const FavListWrapper = styled.div`
  .favlist-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px 0px;
    border-bottom: 1px solid #eee;
    width: 85vw;
    h2 {
      font-size: 32px;
      font-weight: 600;
    }
  }
  .favlist {
    width: 85vw;

    display: flex;
    justify-content: space-between;
    .favlist-content {
      display: flex;
      flex-wrap: wrap;
      width: ${(props) => (props.showSide ? "50vw" : "85vw")};
      .favlist-item {
        height: 220px;
        margin: 30px 20px 20px 0;
        width: 220px;
        overflow: hidden;
        border-radius: 10px;
        background-color: #f8f8f8;
        cursor: pointer;
        img {
          width: 100%;
          object-fit: cover;
          background-color: #e5e5e5;
        }
        h3 {
          height: 48px;
          overflow: hidden;
          font-size: 20px;
          line-height: 1.2;
          margin: 10px 0;
          padding: 0 10px;
          display: --webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .more-info {
          display: flex;
          padding: 0 10px;

          justify-content: space-between;
          .genres {
            width: 150px;
            color: #ffb400;
          }
        }
      }
    }
    .movie-info {
      margin-top: 30px;
      width: 30vw;
      background-color: #f8f8f8;
      position: relative;
      display: ${(props) => (props.showSide ? "block" : "none")};
      transition: all 2s ease-in;
      .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 0 5px;
        cursor: pointer;
        &:hover {
          color: #666;
        }
      }
      img {
        width: 100%;
        background-color: #e5e5e5;
      }
      h2 {
        line-height: 1.2;
        margin: 20px 20px 0 20px;
        display: inline-block;
      }
      span {
        font-size: 14px;
        color: #999;
      }
      .genres {
        margin: 5px 20px 0 20px;
        color: #ffb400;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        span {
          padding-right: 8px;
        }
      }
      .overview {
        padding-top: 10px;
        margin: 0 20px 50px;
        font-family: "Open Sans", sans-serif;
      }
      .btn-unfav {
        margin-left: 20px;
        padding: 5px 20px;
        display: inline-block;
        border-radius: 20px;
        background-color: #ef4238;
        cursor: pointer;
        color: #fff;
        font-weight: 600;
      }
    }
  }
`;
