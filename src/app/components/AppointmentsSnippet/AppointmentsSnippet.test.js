// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import AppointmentsSnippet from "./AppointmentsSnippet.component";

// Test: Checks that AppointmentsSnippet renders
it("Does the AppointmentsSnippet page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <AppointmentsSnippet />
      </Router>
    </Provider>
  );
  const page = queryByTestId("AppointmentsSnippet");
  expect(page).toBeTruthy();
});
