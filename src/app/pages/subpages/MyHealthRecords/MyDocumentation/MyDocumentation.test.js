// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyDocumentation from "./MyDocumentation.component";

// Test: Checks that Calendar renders
it("Does the MyDocumentation subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyDocumentation />
    </Router>
  );
  const page = queryByTestId("myDocumentation");
  expect(page).toBeTruthy();
});
