import styled from "styled-components";
import { ScrollerDiv } from "../../../styles/scrollDiv.style";

export const SidebarLeftX = styled.section`
  position: fixed;
  top: ${props => props.theme.modules.sidebarLeft.position.top};
  height: ${props => props.theme.modules.sidebarLeft.sizes.height};
  width: ${props => props.theme.modules.sidebarLeft.sizes.width};
  border-top: 0.0625rem solid
    ${props => props.theme.modules.sidebarLeft.colors.borderTop};
  border-right: 0.0625rem solid
    ${props => props.theme.modules.sidebarLeft.colors.borderRight};
  overflow: hidden;
  background-color: ${props => props.theme.modules.sidebarLeft.colors.bg};
  z-index: 999;
`;

export const SidebarLeft = styled.section`
  padding-top: 80px;
  width: 220px;
  height: calc(100vh - 30px);
  background-color: ${props => props.theme.modules.sidebarLeft.colors.bg};

  display: grid;
  grid-template-rows: minmax(24.375rem, 3fr) 2fr;
  grid-row-gap: 0.5rem;
`;

export const ItemWrapper = styled(ScrollerDiv)`
  > div {
    border-right: 0.0625rem solid #555;
    padding-right: 0.25rem;
  }

  border-bottom: 0.0625rem solid #555;
`;

export const DefaultItem = styled.div`
  background-color: #32363f;
  height: 1.875rem;
  width: 100%;
  display: grid;
  grid-column-gap: 0.125rem;
  cursor: pointer;
  font-size: 0.75rem;
`;
