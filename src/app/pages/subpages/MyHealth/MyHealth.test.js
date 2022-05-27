// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import MyHealth from "./MyHealth.component";

// Test: Checks that Navigation renders
it("Does the PMyHealth component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyHealth />
    </Router>
  );
  const component = queryByTestId("myHealth");
  expect(component).toBeTruthy();
});
