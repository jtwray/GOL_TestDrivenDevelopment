import React from "react";

import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "./App";

const history = createMemoryHistory();

test("App component renders without crashing", () => {
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  const about = screen.queryByText(/about/i);
  const game = screen.queryByText(/game/i);
  const rules = screen.queryByText(/rules/i);
  expect(about || game || rules).toBeInTheDocument();
});
