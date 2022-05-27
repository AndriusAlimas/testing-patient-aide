// Import: Packages
import { render } from "@testing-library/react";

// import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import AddImage from "./AddImage.component";

// Test: Checks that Navigation renders
it("Does the AddImage component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <AddImage />
    </Router>
  );
  const component = queryByTestId("addImage");
  expect(component).toBeTruthy();
});
