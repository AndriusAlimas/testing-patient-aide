// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import GenericCard from "./GenericCard.component";

// Test: Checks that Navigation renders
it("Does the GenericCard component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <GenericCard />
    </Router>
  );
  const component = queryByTestId("genericCard");
  expect(component).toBeTruthy();
});
