// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyCarePlans from "./MyCarePlans.component";

// Test: Checks that Calendar renders
it("Does the MyCarePlans subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyCarePlans />
    </Router>
  );
  const page = queryByTestId("myCarePlans");
  expect(page).toBeTruthy();
});
