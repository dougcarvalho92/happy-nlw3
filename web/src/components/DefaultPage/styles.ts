import styled from "styled-components";

import NotFound from "../../images/notfoundicon.svg";

export const Container = styled.div`

  height: 100vh;
  width: 100%;
  background-image: url(${NotFound});
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  padding: 30px 80px 0px 180px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: space-between;
  border-bottom: 1px solid #d3e2e5;
  line-height: 85px;
  h1 {
    color: #4d6f80;
  }
  span {
    color: #8fa7b3;
  }
`;
