import styled from "styled-components";

export const OverviewWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  .module-header {
    margin-top: 40px;
    font-size: 20px;
    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      background-color: #ef4238;
      height: 16px;
      margin-right: 6px;
    }
  }
  .module-content {
    &.casts {
      display: flex;
      justify-content: space-between;
      .credit-type {
        margin-bottom: 12px;
      }
      .credit-lists {
        display: flex;
        .cast {
          margin-right: 16px;
          img {
            width: 128px;
            height: 170px;
            object-fit: cover;
            background-color: #e5e5e5;
          }
          .cast-info {
            width: 128px;
            text-align: center;
            .cast-role {
              color: #666;
              font-size: 14px;
            }
          }
        }
      }
    }
    &.gallery {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 100%;
        height: 258px;
        object-fit: cover;
        background-color: #e5e5e5;
      }
      .col-backdrop {
        flex: 60%;
        max-width: 60%;
      }
      .col-posters {
        display: flex;
        flex-wrap: wrap;
        flex: 40%;
        img {
          margin: 0 0 17px 6px;
          width: 120px;
          height: 120px;
        }
      }
    }
    &.reviews {
      .review {
        margin-bottom: 20px;
        .reviewer {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .reviewer-detail {
            .date {
              color: #999;
              font-size: 12px;
            }
          }
        }
        .review-content {
          padding-left: 60px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          &.expand {
            display: block;
          }
        }
        .readmore {
          cursor: pointer;
          padding-left: 60px;
          display: block;
          margin: 10px 0 40px;
          font-weight: 600;
          font-size: 12px;
        }
      }
    }
  }
`;
