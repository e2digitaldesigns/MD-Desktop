import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import * as rrd from "react-router-dom";

import { HeaderLinks, IntHeaderLinks } from "./HeaderLinks";
import { SectionRoutes } from "../../../types";

import { HouseDoor, HouseDoorFill } from "react-bootstrap-icons";
import { ApplicationContext } from "../../../context/context";

const defaultProps: IntHeaderLinks = {
  Icon1: HouseDoor,
  Icon2: HouseDoorFill,
  name: "Home",
  route: SectionRoutes.Home
};

const mockConfig = rrd as { useLocation: () => { pathname: string } };

jest.mock("react-router-dom", () => ({
  __esModule: true,
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/home"
  })
}));

const setup = (props: IntHeaderLinks = defaultProps) => {
  return render(
    <ApplicationContext.ThemeProvider>
      <Router>
        <HeaderLinks {...defaultProps} />{" "}
      </Router>
    </ApplicationContext.ThemeProvider>
  );
};

beforeEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

describe("HeaderLinks", () => {
  it("Should render without errors", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });

  it("should have correct text", () => {
    const component = setup();
    expect(component.getByTestId("header-link__name")).toBeTruthy();
  });

  it("should have correct icon (active)", () => {
    const component = setup();
    expect(component.getByTestId("header-link__active-icon")).toBeTruthy();
  });

  it("should have correct icon (normal)", () => {
    mockConfig.useLocation = () => ({
      pathname: "/settings"
    });
    const component = setup();

    expect(component.getByTestId("header-link__normal-icon")).toBeTruthy();
  });
});
