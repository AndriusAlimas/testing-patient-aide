// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import LandingPage from "./LandingPage.component";

// Test: Checks that LandingPage renders
it("Does the LandingPage page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <LandingPage />
    </Router>
  );
  const page = queryByTestId("LandingPage");
  expect(page).toBeTruthy();
});
