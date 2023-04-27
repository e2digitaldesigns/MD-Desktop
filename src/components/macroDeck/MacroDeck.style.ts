import styled from "styled-components";
import { pxToRem } from "../../utils";

export const MacroDeckGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 220px minmax(835px, 1fr);
  grid-column-gap: ${pxToRem("10px")};
`;
