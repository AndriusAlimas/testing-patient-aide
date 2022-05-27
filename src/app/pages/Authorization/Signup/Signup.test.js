// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Signup from "./Signup.component";

// Test: Checks that Signup renders
it("Does the Signup page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Signup />
      </Router>
    </Provider>
  );
  const page = queryByTestId("Signup");
  expect(page).toBeTruthy();
});
