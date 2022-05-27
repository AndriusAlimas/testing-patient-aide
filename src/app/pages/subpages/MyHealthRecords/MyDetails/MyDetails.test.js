// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyDetails from "./MyDetails.component";

// Test: Checks that Calendar renders
it("Does the MyDetails subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyDetails />
    </Router>
  );
  const page = queryByTestId("myDetails");
  expect(page).toBeTruthy();
});
