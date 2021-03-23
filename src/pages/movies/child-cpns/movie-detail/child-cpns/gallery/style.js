import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 225px;
    height: 135px;
    object-fit: cover;
    display: block;
    margin: 20px 20px 0px 0;
    background-color: #e5e5e5;
  }
`;
