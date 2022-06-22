// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Import: App
import App from "./App";

// Test: Checks that App renders
test("Does the App component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  const page = queryByTestId("application");
  expect(page).toBeTruthy();
});
