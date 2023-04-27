import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "react-bootstrap-icons";
import * as Styled from "./TemplateHeader.style";
import { SectionRoutes } from "../../../types";

export interface IntHeaderLinks {
  Icon1: Icon;
  Icon2: Icon;
  name: string;
  route: SectionRoutes;
}

export const HeaderLinks: React.FC<IntHeaderLinks> = ({
  Icon1,
  Icon2,
  name,
  route
}) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const isActive = route === path[1];

  return (
    <Styled.LinkWrapper isActive={isActive} data-testid="header-link">
      {isActive ? (
        <Icon2 data-testid="header-link__active-icon" />
      ) : (
        <Icon1 data-testid="header-link__normal-icon" />
      )}
      <Link data-testid="header-link__name" to={route}>
        {name}
      </Link>
    </Styled.LinkWrapper>
  );
};
