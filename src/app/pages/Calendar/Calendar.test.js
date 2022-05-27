// Import: Packages
import { render } from "@testing-library/react";
// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Calendar from "./Calendar.component";

// Test: Checks that Calendar renders
it("Does the Calendar page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Calendar />
    </Router>
  );
  const page = queryByTestId("calendar");
  expect(page).toBeTruthy();
});
