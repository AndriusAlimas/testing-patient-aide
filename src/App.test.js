// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: App
import App from "./App";

// Test: Checks that App renders
it("Does the App component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <App />
    </Router>
  );
  const component = queryByTestId("app");
  expect(component).toBeTruthy();
});
