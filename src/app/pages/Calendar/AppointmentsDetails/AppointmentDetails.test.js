import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppointmentDetails from "./AppointmentDetails.component";

// Test: Checks that AppointmentDetails renders
it("Does the AppointmentDetails page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <AppointmentDetails />
    </Router>
  );
  const page = queryByTestId("appointmentDetails");
  expect(page).toBeTruthy();
});
