// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import Caresphere from "./Caresphere.component";

// Test: Checks that Calendar renders
it("Does the Caresphere subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Caresphere />
    </Router>
  );
  const page = queryByTestId("caresphere");
  expect(page).toBeTruthy();
});
