// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import GenericPopUp from "./GenericPopUp.component";

// Test: Checks that Navigation renders
it("Does the GenericPopUp component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <GenericPopUp />
    </Router>
  );
  const component = queryByTestId("genericPopUp");
  expect(component).toBeTruthy();
});
