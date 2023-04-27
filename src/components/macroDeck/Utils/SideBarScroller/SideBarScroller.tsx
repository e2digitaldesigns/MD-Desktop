import React from "react";
import * as Styled from "./SideBarScroller.style";

interface ISideBarScroller {
  children: React.ReactNode;
}
export const SideBarScroller: React.FC<ISideBarScroller> = ({ children }) => {
  return (
    <Styled.ScrollerWrapper>
      <div>{children}</div>
    </Styled.ScrollerWrapper>
  );
};
