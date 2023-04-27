import styled from "styled-components";
import { DefaultItem } from "../../sideBarLeft.style";

export const ProfileNewWrapper = styled.div`
  height: 24.375rem;
  width: 13.75rem;
  border-bottom: 0.0625rem solid
    ${props =>
      props.theme.modules.sidebarLeft.profileEdit.wrapper.border.normal};
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileEdit.wrapper.bg.normal};
  position: relative;
`;

export const ProfileNewButtons = styled(DefaultItem)`
  grid-template-columns: 2.5rem min-content;
  border-bottom: 0.0625em solid
    ${props => props.theme.modules.sidebarLeft.profileNew.colors.border};
  :hover {
    background-color: ${props =>
      props.theme.modules.sidebarLeft.profileNew.colors.bg.hover};
    > div {
      color: ${props =>
        props.theme.modules.sidebarLeft.profileNew.colors.font.hover};
      > svg {
        color: ${props =>
          props.theme.modules.sidebarLeft.profileNew.colors.icon.hover};
      }
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.8125rem;
    color: ${props =>
      props.theme.modules.sidebarLeft.profileNew.colors.font.normal};

    :nth-child(1) {
      color: ${props =>
        props.theme.modules.sidebarLeft.profileNew.colors.icon.normal};
    }

    :nth-child(2) {
      justify-content: left;
    }
  }
`;
