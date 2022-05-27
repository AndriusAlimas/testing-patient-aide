// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import CPAPForm from "./CPAPForm.component";

// Test: Checks that Navigation renders
it("Does the CPAPForm component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <CPAPForm />
    </Router>
  );
  const component = queryByTestId("cpapForm");
  expect(component).toBeTruthy();
});
