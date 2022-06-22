// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import CurrentDate from "./CurrentDate.component";

// Test: Checks that CurrentDate renders
it("Does the CurrentDate page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <CurrentDate />
      </Router>
    </Provider>
  );
  const page = queryByTestId("CurrentDate");
  expect(page).toBeTruthy();
});
