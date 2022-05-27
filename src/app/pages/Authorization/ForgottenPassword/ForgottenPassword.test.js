// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import ForgottenPassword from "./ForgottenPassword.component";

// Test: Checks that ForgottenPassword renders
it("Does the ForgottenPassword page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ForgottenPassword />
      </Router>
    </Provider>
  );
  const page = queryByTestId("ForgottenPassword");
  expect(page).toBeTruthy();
});
