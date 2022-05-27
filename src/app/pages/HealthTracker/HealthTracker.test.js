// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import HealthTracker from "./HealthTracker.component";

// Test: Checks that Calendar renders
it("Does the HealthTracker page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <HealthTracker />
    </Router>
  );
  const page = queryByTestId("healthTracker");
  expect(page).toBeTruthy();
});
