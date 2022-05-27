// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: SubPage
import MyQuestionnaires from "./MyQuestionnaires.component";

// Test: Checks that Calendar renders
it("Does the MyQuestionnaires subpage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <MyQuestionnaires />
    </Router>
  );
  const page = queryByTestId("myQuestionnaires");
  expect(page).toBeTruthy();
});
