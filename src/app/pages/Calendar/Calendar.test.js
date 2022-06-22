// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Calendar from "./Calendar.component";

// Test: Checks that Calendar renders
it("Does the Calendar page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <Calendar />
      </Router>
    </Provider>
  );
  const page = queryByTestId("calendar");
  expect(page).toBeTruthy();
});
