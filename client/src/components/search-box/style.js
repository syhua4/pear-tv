import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  display: flex;
  .search-form {
    width: ${(props) => props.width || "235px"};
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
      background-position: -10px -110px;
    }
  }
`;
