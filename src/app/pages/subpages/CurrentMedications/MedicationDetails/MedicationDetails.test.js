// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import MedicationDetails from "./MedicationDetails.component";

// Test: Checks that Navigation renders
it("Does the MedicationDetails component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MedicationDetails />
    </Router>
  );
  const component = queryByTestId("medicationDetails");
  expect(component).toBeTruthy();
});
