// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import ForgottenPassword from "./ForgottenPassword.component";

// Test: Checks that ForgottenPassword renders
it("Does the ForgottenPassword page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ForgottenPassword />
    </Router>
  );
  const page = queryByTestId("ForgottenPassword");
  expect(page).toBeTruthy();
});
