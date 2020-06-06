import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 100%;

  flex: 1;
  video {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    height: 100%;
  }
  div {
    margin-right: 30px;
    padding: 10px;
    height: 50px;
    a {
      padding: 5px;
    }
  }
`;
