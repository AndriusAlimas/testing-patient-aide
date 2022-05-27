// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyTestResults from "./MyTestResults.component";

// Test: Checks that Calendar renders
it("Does the MyTestResults subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyTestResults />
    </Router>
  );
  const page = queryByTestId("myTestResults");
  expect(page).toBeTruthy();
});
