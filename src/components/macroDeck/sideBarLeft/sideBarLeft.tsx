import React from "react";
import * as Styled from "./sideBarLeft.style";
import SideBarStyles from "./SideBarStyles/SideBarStyles";
import SideBarProfiles from "./SideBarProfiles/Profiles";

export const MacroDeckSidebarLeft: React.FC = () => {
  return (
    <Styled.SidebarLeft>
      <SideBarProfiles />
      <SideBarStyles />
    </Styled.SidebarLeft>
  );
};
