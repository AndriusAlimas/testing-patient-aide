// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import FutureAppointments from "./FutureAppointments.component";

// Test: Checks that FutureAppointments renders
it("Does the FutureAppointments page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <FutureAppointments />
      </Router>
    </Provider>
  );
  const page = queryByTestId("FutureAppointments");
  expect(page).toBeTruthy();
});
