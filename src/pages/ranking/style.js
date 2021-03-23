import styled from "styled-components";

export const RankingWrapper = styled.div`
  margin-bottom: 50px;

  padding: 0 20px;
  > span {
    font-size: 12px;
    display: block;
    text-align: center;
    color: #999;
    margin: 60px 0 40px;
  }
  .ranking-list {
    .ranking-item {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      &:first-child .rank-index {
        background: url(${require("@/assets/image/peartv_sprites.png")
          .default});
        background-position: -139px -10px;
        font-size: 0;
      }
      &:nth-child(2) .rank-index,
      &:nth-child(3) .rank-index {
        background: #ffb400;
        color: #fff;
      }

      .rank-index {
        width: 50px;
        height: 50px;
        line-height: 55px;
        text-align: center;
        background: #f7f7f7;
        font-size: 20px;
        color: #999;
        font-weight: 600;
        font-style: italic;
      }
      img {
        margin: 0 30px;
        width: 160px;
        height: 220px;
        object-fit: cover;
        cursor: pointer;
        background-color: #e5e5e5;
      }
      .item-info {
        width: 70vw;
        height: 220px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .item-info-left {
          width: 350px;
          overflow: hidden;
          h2 {
            margin-bottom: 20px;
            cursor: pointer;
          }
          .genres,
          .release {
            font-size: 14px;
          }
          .release {
            color: #999;
          }
        }
      }
      .vote {
        margin-left: auto;
        color: #ffb400;
        font-style: italic;
        font-weight: 700;
        font-size: 60px;
        .decimal {
          font-size: 30px;
        }
      }
    }
  }
`;
