import styled from "styled-components";

export const SearchWrapper = styled.div`
  .search-box-wrapper {
    background-color: #47464a;
    height: 156px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90vw;

    .result-item {
      display: flex;
      width: 460px;
      margin: 40px 0 0 30px;
      &:hover img {
        box-shadow: 0 0 8px #fff, 0 5px 13px rgb(0 0 0 / 20%);
      }
      img {
        width: 160px;
        height: 220px;
        object-fit: cover;
        margin-right: 20px;
        cursor: pointer;
      }
      .result-info {
        width: 280px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #eee;
        a,
        h2 {
          width: 280px;
          display: block;
          margin-top: 27px;
          cursor: pointer;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .rating {
          color: #ffb400;
          font-size: 26px;
          font-weight: 600;
          margin: 10px 0;
        }
        .genres,
        .release {
          font-size: 14px;
          font-family: "Open Sans", sans-serif;
        }
        .release {
          color: #999;
        }
      }
    }
  }
`;
