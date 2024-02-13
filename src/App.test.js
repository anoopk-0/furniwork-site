import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./layouts", () => ({
  NavBar: () => <div data-testid="navbar">Mock NavBar</div>,
  Home: () => <div data-testid="home">Mock Home</div>,
  Footer: () => <div data-testid="footer">Mock Footer</div>,
}));

describe("App component", () => {
  test("renders NavBar component", () => {
    const { getByTestId } = render(<App />);
    const navBarElement = getByTestId("navbar");
    expect(navBarElement).toBeInTheDocument();
  });

  test("renders Home component", () => {
    const { getByTestId } = render(<App />);
    const homeElement = getByTestId("home");
    expect(homeElement).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    const { getByTestId } = render(<App />);
    const footerElement = getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
