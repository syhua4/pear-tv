import styled from "styled-components";

export const DiscoverGridWrapper = styled.div`
  margin-bottom: 50px;
  .grid-title {
    padding: 1rem;
    margin-top: 1rem;
    color: #ef4238;
  }
  .grid-wrapper {
    width: 100vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 160px));
    grid-gap: 2.5rem;
    align-items: center;
    justify-content: center;
    .grid-item {
      width: 160px;
      height: 220px;
      cursor: pointer;
      position: relative;
      &:hover {
        box-shadow: 0 0 8px #fff, 0 5px 13px rgb(0 0 0 / 20%);
      }
      .movie-poster {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: #e5e5e5;
      }
      .poster-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url(${require("@/assets/image/movie-overlay.png")
            .default})
          repeat-x bottom;
        transition: 2s ease-in;
        .movie-info {
          color: #fff;
          position: absolute;
          bottom: 7px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .movie-title {
            margin: 0 10px;
            margin-right: 35px;
          }
          .movie-score {
            margin-right: 10px;
            color: #ffb400;
            font-style: italic;
            .decimal {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
