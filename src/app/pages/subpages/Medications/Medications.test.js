// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import Medications from "./Medications.component";

// Test: Checks that Navigation renders
it("Does the Medications component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Medications />
    </Router>
  );
  const component = queryByTestId("medications");
  expect(component).toBeTruthy();
});
