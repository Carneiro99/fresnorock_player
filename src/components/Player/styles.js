import styled from "styled-components";
import { darken } from "polished";

export const PlayerMusic = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  top: 70%;
  width: 280px;
  padding: 20px;
  margin-left: 30px;
  max-height: 20px;
  //border: 1px solid #d2df36;
  text {
    color: #d2df36;
    padding: 5px;
    margin-bottom: 2px;
  }
  button {
    overflow: hidden;
    background: black;
    border: none;
    color: black;
    border-radius: 0px;
    outline: none;

    &:hover {
      border: #d2df36;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  text {
    color: #d2df36;
    padding: 5px;
    margin-bottom: 2px;
    font-style: bold;
  }
`;
