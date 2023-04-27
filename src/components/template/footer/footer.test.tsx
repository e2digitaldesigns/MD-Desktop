import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TemplateFooter } from "./footer";

import { ApplicationContext } from "../../../context/context";

const testSetup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <TemplateFooter />
    </ApplicationContext.ThemeProvider>
  );
};

describe("<Template Footer/>", () => {
  const component = testSetup();

  it("Should render without errors", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should show ipAddress label", () => {
    expect(component.findByText("ip address")).toBeTruthy();
  });

  it("Should show port label", () => {
    expect(component.findByText("port")).toBeTruthy();
  });
});
