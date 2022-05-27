// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import ProfilePopUp from "./ProfilePopUp.component";

// Test: Checks that Navigation renders
it("Does the ProfilePopUp component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ProfilePopUp />
    </Router>
  );
  const component = queryByTestId("profilePopUp");
  expect(component).toBeTruthy();
});
