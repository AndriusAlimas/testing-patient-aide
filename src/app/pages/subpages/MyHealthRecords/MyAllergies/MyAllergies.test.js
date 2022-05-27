// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyAllergies from "./MyAllergies.component";

// Test: Checks that Calendar renders
it("Does the MyAllergies subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyAllergies />
    </Router>
  );
  const page = queryByTestId("myAllergies");
  expect(page).toBeTruthy();
});
