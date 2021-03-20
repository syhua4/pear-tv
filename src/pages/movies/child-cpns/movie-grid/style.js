import styled from "styled-components";

export const MovieGridWrapper = styled.div`
  .grid-wrapper {
    width: 100vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 220px));
    grid-gap: 1rem;
    row-gap: 1.5rem;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    .grid-item {
      width: 220px;
      cursor: pointer;
      position: relative;
      margin-bottom: 20px;
      overflow: hidden;
      box-shadow: 1px 1px 8px rgb(0 0 0 / 0%);

      &:hover {
        box-shadow: 1px 1px 8px rgb(0 0 0 / 20%);

        .grid-overlay {
          top: 0;
        }
      }
      .rating {
        color: #fff;
        border-radius: 10px;
        font-size: 12px;
        padding: 0 7px;
        display: inline-block;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.6);
        top: 5px;
        right: 5px;
      }
      > img {
        width: 100%;
        border-radius: 0 0 5px 5px;
      }
      > .movie-title {
        padding: 6px 5px;
        background-color: #f8f8f8;
        line-height: 1;
      }
      .grid-overlay {
        position: absolute;
        top: 100%;
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        left: 0;
        height: 358px;
        background-color: #f8f8f8;
        * {
          margin-bottom: 6px;
          padding: 0 14px;
        }
        > .movie-title {
          line-height: 1.25rem;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        img {
          width: 100%;
          height: 50%;
          object-fit: cover;
          margin-bottom: 10px;
          padding: 0;
        }
        .genres {
          font-size: 12px;
          height: 16px;
          overflow: hidden;
          span {
            display: inline-block;
            padding: 0 5px;
          }
        }
        .description {
          height: 100px;
          font-size: 14px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
        .btn-fav {
          color: #fff;
          background-color: #ef4238;
          padding: 0 15px;
          border-radius: 10px;
          display: inline-block;
          text-align: center;
          font-size: 12px;
          text-transform: capitalize;
          cursor: pointer;
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
      }
    }
  }
`;
