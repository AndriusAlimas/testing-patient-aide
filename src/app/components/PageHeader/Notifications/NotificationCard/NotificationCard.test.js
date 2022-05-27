// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Component
import NotificationCard from "./NotificationCard.component";

// Test: Checks that Navigation renders
it("Does the NotificationCard component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <NotificationCard />
    </Router>
  );
  const component = queryByTestId("notificationCard");
  expect(component).toBeTruthy();
});
