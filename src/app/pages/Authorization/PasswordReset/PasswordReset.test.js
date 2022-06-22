// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import PasswordReset from "./PasswordReset.component";

// Test: Checks that PasswordReset renders
it("Does the PasswordReset page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <PasswordReset />
    </Router>
  );
  const page = queryByTestId("PasswordReset");
  expect(page).toBeTruthy();
});
