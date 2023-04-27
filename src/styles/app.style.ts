import styled from "styled-components";
import { pxToRem } from "./../utils";

export const MainContentX = styled.div`
  width: 100%;
  padding: ${pxToRem("80px")} 0 0 ${pxToRem("220px")};
  align-items: center;
  background: #1c1e23;
`;

export const MainContent = styled.div`
  height: 100vh;
  padding: ${pxToRem("90px")} 10px 0 0;
  display: grid;
  grid-template-rows: minmax(335px, 55%) minmax(247px, calc(45% - 35px));
`;
