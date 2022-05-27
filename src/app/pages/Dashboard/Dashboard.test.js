// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import Dashboard from "./Dashboard.component";

// Test: Checks that Calendar renders
it("Does the Dashboard page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Dashboard />
    </Router>
  );
  const page = queryByTestId("dashboard");
  expect(page).toBeTruthy();
});
