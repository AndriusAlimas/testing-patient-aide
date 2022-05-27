// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import PasswordReset from "./PasswordReset.component";

// Test: Checks that PasswordReset renders
it("Does the PasswordReset page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <PasswordReset />
      </Router>
    </Provider>
  );
  const page = queryByTestId("PasswordReset");
  expect(page).toBeTruthy();
});
