// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import AppointmentExtract from "./AppointmentExtract.component";

// Test: Checks that AppointmentExtract renders
it("Does the AppointmentExtract page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <AppointmentExtract />
      </Router>
    </Provider>
  );
  const page = queryByTestId("AppointmentExtract");
  expect(page).toBeTruthy();
});
