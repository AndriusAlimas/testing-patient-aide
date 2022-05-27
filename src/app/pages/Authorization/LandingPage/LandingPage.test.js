// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import LandingPage from "./LandingPage.component";

// Test: Checks that LandingPage renders
it("Does the LandingPage page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <LandingPage />
      </Router>
    </Provider>
  );
  const page = queryByTestId("LandingPage");
  expect(page).toBeTruthy();
});
