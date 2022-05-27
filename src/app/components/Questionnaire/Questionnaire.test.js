// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import Questionnaire from "./Questionnaire.component";

// Test: Checks that Navigation renders
it("Does the Questionnaire component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Questionnaire />
    </Router>
  );
  const component = queryByTestId("questionnaire");
  expect(component).toBeTruthy();
});
