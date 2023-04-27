import styled from "styled-components";
import { ScrollerDiv } from "../../../../styles/scrollDiv.style";

export const ScrollerWrapper = styled(ScrollerDiv)`
  > div {
    border-right: 0.0625rem solid #555;
    padding-right: 0.25rem;
    min-height: 100%;
  }

  border-bottom: 0.0625rem solid #555;
`;
