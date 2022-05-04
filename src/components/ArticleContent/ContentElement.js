import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  .title {
    margin: 20px;
  }
  .content-image {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    img {
      border-radius: 20px;
    }
  }
  .paragraph {
    margin: 50px;
  }
`