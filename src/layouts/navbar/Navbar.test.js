import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  it("renders without crashing", () => {
    render(<NavBar />);
  });

  it("displays menu items", () => {
    const { getByText } = render(<NavBar />);
    const productsMenuItem = getByText("Products");
    expect(productsMenuItem).toBeInTheDocument();
  });
});
