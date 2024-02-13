import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";

describe("NavBar component", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
  });
});
