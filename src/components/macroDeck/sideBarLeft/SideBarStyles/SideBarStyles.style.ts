import styled from "styled-components";

export const SideBarStylesWrapper = styled.div`
  width: ${props => props.theme.modules.sidebarLeft.sizes.width};
  overflow: hidden;
  position: relative;
  display: flex;
  height: 100%;
`;

export const ItemListGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr;
`;
