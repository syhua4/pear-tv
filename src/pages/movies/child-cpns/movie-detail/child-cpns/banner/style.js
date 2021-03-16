import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100vw;
  min-width: 1200px;
  margin-bottom: 70px;
  background: purple url(${require("@/assets/image/banner2.png").default})
    no-repeat;
  position: relative;
  > div {
    display: flex;
  }
  .banner-poster {
    border: 4px solid #fff;
    height: 322px;
    width: 232px;
    position: relative;
    top: 70px;
    margin: 0 30px;
  }
  .banner-info {
    color: #fff;
    position: relative;
    margin-right: 30px;
    margin-top: 70px;
    font-family: "Open Sans", sans-serif;
    > div {
      width: 260px;
      font-size: 14px;
      margin-bottom: 5px;
    }
    h1 {
      height: 66px;
      width: 340px;
      font-size: 28px;
      display: -webkit-box;
      overflow: hidden;
      font-family: "Josefin Sans", sans-serif;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .rating {
      font-size: 10px;
      display: flex;
      line-height: 12px;
      .star-wrapper {
        width: 60px;
        height: 12px;
        position: relative;
        margin: 0 4px 4px 0;
        background: url(${require("@/assets/image/blank_star.png")
            .default})
          repeat-x;
        background-size: contain;
        .active-stars {
          height: 12px;
          background: url(${require("@/assets/image/star.png").default})
            repeat-x;
          background-size: contain;
        }
      }
    }

    .banner-info-sub {
      .btns {
        margin-top: 30px;
        > a,
        div {
          color: #fff;
          width: 120px;
          height: 25px;
          background-color: #756189;
          margin-right: 10px;
          padding-top: 3px;
          text-align: center;
          display: inline-block;
          border-radius: 3px;
          cursor: pointer;
          text-transform: capitalize;
          i {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
