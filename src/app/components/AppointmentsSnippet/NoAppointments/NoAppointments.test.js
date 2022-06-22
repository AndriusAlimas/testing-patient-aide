// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import NoAppointments from "./NoAppointments.component";

// Test: Checks that NoAppointments renders
it("Does the NoAppointments page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <NoAppointments />
      </Router>
    </Provider>
  );
  const page = queryByTestId("NoAppointments");
  expect(page).toBeTruthy();
});
