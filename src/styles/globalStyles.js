import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
video {
  left: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: black;

}
body {
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: black;

  height: 100%;
  width: 100%;
  
}`;
