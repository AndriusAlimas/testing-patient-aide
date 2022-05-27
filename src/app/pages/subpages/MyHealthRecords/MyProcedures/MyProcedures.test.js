// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyProcedures from "./MyProcedures.component";

// Test: Checks that Calendar renders
it("Does the MyProcedures subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyProcedures />
    </Router>
  );
  const page = queryByTestId("myProcedures");
  expect(page).toBeTruthy();
});
