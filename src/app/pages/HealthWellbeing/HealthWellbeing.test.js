// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import HealthWellbeing from "./HealthWellbeing.component";

// Test: Checks that Calendar renders
it("Does the HealthWellbeing page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <HealthWellbeing />
    </Router>
  );
  const page = queryByTestId("healthWellbeing");
  expect(page).toBeTruthy();
});
