// Import: Packages
import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Navigation,
  MissingRoute,
  PrivateRoutesWrapper,
  PublicRoutesWrapper,
  AnimatedRoutes,
  CPAPForm,
  Questionnaire,
} from "./app/components";
import {
  LandingPage,
  Login,
  Signup,
  PasswordReset,
  EmailSent,
  ForgottenPassword,
  MyConditions,
  MyProcedures,
  MyDocumentation,
  MyTestResults,
  MyAllergies,
  Dashboard,
  HealthTracker,
  MyDetails,
  MyQuestionnaires,
  Medications,
  Caresphere,
  MyVisits,
  MyVisitDetails,
  Calendar,
} from "./app/pages";
import { registerOptionalParams } from "./utils/reactRouterV6Helpers";

export default function App() {
  const [sidebar, setSidebar] = useState(
    window.innerWidth > 425 ? true : false
  );
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [healthOpen, setHealthOpen] = useState(false);
  const [healthRecordsOpen, setHealthRecordsOpen] = useState(false);
  return (
    <div data-testid={"application"}>
      <Routes>
        <Route
          element={<PublicRoutesWrapper isAuthenticated={isAuthenticated} />}
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          {/* this is a normal route but with optional parameters, not supported yet by react-router-dom v6 */}
          {registerOptionalParams("/login/:userEmail?", <Login />)}
          {registerOptionalParams(
            "/emailsent/:userEmail?/:reset?",
            <EmailSent />
          )}
          {registerOptionalParams(
            "/passwordreset/:userId/:resetString",
            <PasswordReset />
          )}
          <Route path="/forgottenpassword" element={<ForgottenPassword />} />
        </Route>
        <Route
          element={<PrivateRoutesWrapper isAuthenticated={isAuthenticated} />}
        >
          <Route
            element={
              <>
                <Navigation
                  sidebar={sidebar}
                  setSidebar={() => setSidebar(!sidebar)}
                  openNavbar={() => setSidebar(true)}
                  healthOpen={healthOpen}
                  setHealthOpen={() => setHealthOpen(!healthOpen)}
                  healthRecordsOpen={healthRecordsOpen}
                  setHealthRecordsOpen={() =>
                    setHealthRecordsOpen(!healthRecordsOpen)
                  }
                />
                <Outlet />
              </>
            }
          >
            <Route element={<AnimatedRoutes />}>
              <Route
                path="/dashboard"
                element={<Dashboard sidebar={sidebar} />}
              />
              <Route
                path="/health-tracker"
                element={<HealthTracker sidebar={sidebar} />}
              />
              <Route
                path="/calendar"
                element={<Calendar sidebar={sidebar} />}
              />
              <Route
                path="/my-details"
                element={<MyDetails sidebar={sidebar} />}
              />
              <Route
                path="/my-conditions"
                element={<MyConditions sidebar={sidebar} />}
              />
              <Route
                path="/my-procedures"
                element={<MyProcedures sidebar={sidebar} />}
              />
              <Route
                path="/my-questionnaires"
                element={<MyQuestionnaires sidebar={sidebar} />}
              />
              <Route
                path="/my-documentation"
                element={<MyDocumentation sidebar={sidebar} />}
              />
              <Route
                path="/my-test-results"
                element={<MyTestResults sidebar={sidebar} />}
              />
              <Route
                path="/my-allergies"
                element={<MyAllergies sidebar={sidebar} />}
              />
              <Route
                path="/Current-medication"
                element={<Medications sidebar={sidebar} />}
              />
              <Route
                path="/medication"
                element={<Medications sidebar={sidebar} />}
              />
              <Route
                path="/questionnaire"
                element={<Questionnaire sidebar={sidebar} />}
              />
              <Route
                path="/caresphere"
                element={<Caresphere sidebar={sidebar} />}
              />
              <Route
                path="/my-visits"
                element={<MyVisits sidebar={sidebar} />}
              />
              <Route
                path="/my-visit-details"
                element={<MyVisitDetails sidebar={sidebar} />}
              />
              <Route
                path="/cpapform"
                element={<CPAPForm sidebar={sidebar} />}
              />{" "}
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<MissingRoute />} />
      </Routes>
    </div>
  );
}
