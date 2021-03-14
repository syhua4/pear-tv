import styled from "styled-components";

export const FilterWrapper = styled.div`
  background-color: #f9f9f9;
  margin-bottom: 50px;
  .filter {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    p {
      color: #999;
      margin: 0 0 10px 5px;
    }
    .order-by,
    .genres,
    .year {
      span {
        font-size: 14px;
        display: inline-block;
        margin-right: 6px;
        color: #666;
        text-decoration: none;
        border: 1px solid #ccc;
        padding: 2px 10px;
        border-radius: 50px;
        margin-bottom: 6px;
        cursor: pointer;
        &.active {
          background-color: #ef4238;
          color: #fff;
          border-color: #ef4238;
        }
      }
    }
  }
`;
