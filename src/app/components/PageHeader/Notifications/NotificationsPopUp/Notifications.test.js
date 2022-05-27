// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import Notifications from "./Notifications.component";

// Test: Checks that Navigation renders
it("Does the Notifications component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Notifications />
    </Router>
  );
  const component = queryByTestId("notifications");
  expect(component).toBeTruthy();
});
