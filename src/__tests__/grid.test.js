import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Grid from "../components/grid/Grid";

it("renders a grid to the screen", () => {
  render(<Grid />);

  expect(screen.getByText(/grid/i)).toBeInTheDocument();
});

it("renders a grid with length === height", () => {
  render(<Grid length={50} />);

  expect(screen.getByText(/grid/i)).toBeInTheDocument();
});
