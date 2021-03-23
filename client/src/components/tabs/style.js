import styled from "styled-components";

export const TabsWrapper = styled.div`
  .tabs {
    display: flex;
    width: 100%;
    position: relative;
    &::before {
      content: "";
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #ddd;
    }
    .tab-item {
      margin: 0 20px;
      padding: 20px 0 10px;
      font-size: 22px;
      position: relative;
      cursor: pointer;
      &:hover,
      &.active {
        color: #ef4238;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active::before {
        content: "";
        height: 4px;
        width: 100%;
        background-color: #ef4238;
        position: absolute;
        bottom: 0px;
      }
    }
  }
`;
