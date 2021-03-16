import styled from "styled-components";

export const CastGroupWrapper = styled.div`
  padding-left: 0;
  > div {
    margin: 20px 0;
  }
  .credit-type {
    margin-bottom: 12px;
    font-size: 18px;
  }
  .credit-lists {
    display: flex;
    flex-wrap: wrap;
    .cast {
      margin: 10px 16px 10px 0;
      img {
        width: 128px;
        height: 170px;
        object-fit: cover;
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
`;
