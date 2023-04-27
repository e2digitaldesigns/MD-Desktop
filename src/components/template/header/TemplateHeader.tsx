import React from "react";
import {
  Gear,
  GearFill,
  HouseDoor,
  HouseDoorFill,
  XDiamond,
  XDiamondFill
} from "react-bootstrap-icons";
import * as Styled from "./TemplateHeader.style";

import { HeaderLinks } from "./HeaderLinks";

import { SectionRoutes } from "../../../types";

import { useLocation, useNavigate } from "react-router-dom";

export const TemplateHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      navigate(SectionRoutes.MacroDeck);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Header>
      <HeaderLinks
        Icon1={HouseDoor}
        Icon2={HouseDoorFill}
        name="Home"
        route={SectionRoutes.Home}
      />

      <HeaderLinks
        Icon1={XDiamond}
        Icon2={XDiamondFill}
        name="MacroDeck"
        route={SectionRoutes.MacroDeck}
      />

      <HeaderLinks
        Icon1={Gear}
        Icon2={GearFill}
        name="Settings"
        route={SectionRoutes.Settings}
      />
    </Styled.Header>
  );
};
