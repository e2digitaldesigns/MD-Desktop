import React from "react";
import * as Styled from "./MacroDeck.style";

import { MacroDeckMainContent } from "./mainContent/mainContent";
import { MacroDeckSidebarLeft } from "./sideBarLeft/sideBarLeft";
import { MacroDeckSubHeader } from "./subheader/subHeader";

const MacroDeck: React.FC = () => {
  return (
    <>
      <MacroDeckSubHeader />

      <Styled.MacroDeckGrid>
        <MacroDeckSidebarLeft />
        <MacroDeckMainContent />
      </Styled.MacroDeckGrid>
    </>
  );
};

export default MacroDeck;
