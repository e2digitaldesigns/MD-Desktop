import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";

import { TemplateHeader } from "./TemplateHeader";
import { ApplicationContext } from "../../../context/context";

const setup = () => {
  return render(
    <ApplicationContext.ThemeProvider>
      <Router>
        <TemplateHeader />
      </Router>
    </ApplicationContext.ThemeProvider>
  );
};

describe("Template Header", () => {
  it("Should render without errors", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });

  it("Should return 3 links", async () => {
    const component = setup();
    const links = await component.findAllByTestId("header-link");
    expect(links.length).toEqual(3);
  });
});
