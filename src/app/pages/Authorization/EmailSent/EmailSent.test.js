// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import EmailSent from "./EmailSent.component";

// Test: Checks that EmailSent renders
it("Does the EmailSent page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <EmailSent />
      </Router>
    </Provider>
  );
  const page = queryByTestId("EmailSent");
  expect(page).toBeTruthy();
});
