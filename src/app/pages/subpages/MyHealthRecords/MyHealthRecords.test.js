// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyHealthRecords from "./MyHealthRecords.component";

// Test: Checks that Calendar renders
it("Does the MyHealthRecords subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyHealthRecords />
    </Router>
  );
  const page = queryByTestId("myHealthRecords");
  expect(page).toBeTruthy();
});
