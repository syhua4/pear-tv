import styled from "styled-components";

export const FooterWrapper = styled.div`
  font-size: 12px;
  .credit {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    span {
      color: #999;
      padding-left: 10px;
    }
  }
  .copyright {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    color: #233554;
    &:hover {
      color: #8892b0;
    }
  }

  /* margin: 0 auto; */
`;
