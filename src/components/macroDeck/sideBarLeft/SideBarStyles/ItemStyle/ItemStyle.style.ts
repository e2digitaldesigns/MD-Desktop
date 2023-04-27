import styled from "styled-components";
import { DefaultItem } from "../../sideBarLeft.style";

export const ItemStyle = styled(DefaultItem)`
  grid-template-columns: 2.5rem auto 1.875rem;
  font-size: 0.9rem;

  svg {
    width: 0.875rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Drag = styled.div`
  border-right: 0.0625em solid
    ${props =>
      props.theme.modules.sidebarLeft.navigationItems.colors.drag.border};
`;

export const InnerGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);

  > div {
    justify-content: center !important;
    text-align: center;
  }
`;

export const Remove = styled.div`
  border-left: 0.0625em solid
    ${props =>
      props.theme.modules.sidebarLeft.navigationItems.colors.remove.border};
  color: ${props =>
    props.theme.modules.sidebarLeft.navigationItems.colors.remove.font};
`;
