// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import TodaysAppointments from "./TodaysAppointments.component";

// Test: Checks that TodaysAppointments renders
it("Does the TodaysAppointments page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <TodaysAppointments />
      </Router>
    </Provider>
  );
  const page = queryByTestId("TodaysAppointments");
  expect(page).toBeTruthy();
});
