// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyConditions from "./MyConditions.component";

// Test: Checks that Calendar renders
it("Does the MyConditions subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyConditions />
    </Router>
  );
  const page = queryByTestId("myConditions");
  expect(page).toBeTruthy();
});
