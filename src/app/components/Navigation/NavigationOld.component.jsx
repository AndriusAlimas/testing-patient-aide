// Import: Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import: Elements

import {
  Sidebar,
  HealthRecords,
  SecondaryMenu,
  RecordsMenu,
} from "./NavigationOld.elements";

// Import: Icons and Logo
import {
  MyTestResultsIcon,
  HealthIcon,
  MenuIcon,
  HomeIcon,
  // CalendarIcon,
  HealthTrackerIcon,
  HealthWellbeingIcon,
  HealthRecordsIcon,
  MyRecordsIcon,
  AllergiesIcon,
  ConditionsIcon,
  ProceduresIcon,
  QuestionnairesIcon,
  DocumentationIcon,
  CaresphereIcon,
  CarePlansIcon,
  LoginIcon,
  CalendarIcon,
} from "../../../assets/constants/constants";

import patientAideLogo from "../../../assets/img/logo/patientAideLogoSVG.svg";
import HomeIcon2 from "../../../assets/img/icons/HomeIcon.icon";
import DocumentsIcon from "../../../assets/img/icons/DocumentsIcon.icon";
import MyHealthIcon from "../../../assets/img/icons/MyHealthIcon.icon";
import HomeFilledIcon from "../../../assets/img/icons/HomeFilledIcon.icon";
import DocumentsFilledIcon from "../../../assets/img/icons/DocumentsFilledIcon.icon";
import MyHealthFilledIcon from "../../../assets/img/icons/MyHealthFilledIcon.icon";

export default function Navigation({
  sidebar,
  setSidebar,
  openNavbar,
  healthOpen,
  setHealthOpen,
  healthRecordsOpen,
  setHealthRecordsOpen,
}) {
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  const [selectedPage, setSelectedPage] = useState("Home");

  const { scrollYStatus } = useSelector((state) => state.scrollYStatus);

  useEffect(() => {
    const data = window.sessionStorage.getItem("DASHBOARD");
    data !== null && setSelectedPage(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("DASHBOARD", JSON.stringify(selectedPage));
  }, [selectedPage]);

  return (
    <>
      <SecondaryMenu healthOpen={healthOpen}>
        <Sidebar
          style={{
            marginBottom: "60px",
            backgroundColor: "#3d7ab1",
            padding: "10px",
          }}
        >
          <ul className="secondary-list">
            <li>
              <Link to="/my-health-records" onClick={setHealthOpen}>
                <span className="subpages">Health Records</span>
              </Link>
            </li>
            <li>
              <Link to="/caresphere" onClick={setHealthOpen}>
                <span className="subpages">Caresphere</span>
              </Link>
            </li>
            <li>
              <Link to="/my-care-plans">
                <span className="subpages" onClick={setHealthOpen}>
                  Care Plans
                </span>
              </Link>
            </li>
          </ul>
        </Sidebar>
      </SecondaryMenu>

      <Sidebar
        scrollYStatus={scrollYStatus}
        sidebar={sidebar}
        healthOpen={healthOpen}
        healthRecordsOpen={healthRecordsOpen}
        data-testid={"navigation"}
      >
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon">
            <HealthIcon />
          </i>
          <div className="iconLogo">
            <img
              className="logo_name"
              alt="Patient Aide Logo"
              id="patientAideLogo"
              src={patientAideLogo}
            />
          </div>
          <i className="bx bx-menu" id="btn" onClick={setSidebar}>
            <MenuIcon />
          </i>
        </div>
        <ul className="nav-list">


        
          {/* Mobile menu */}
          <div className="threeIcons">
            <li>
              <Link to="/dashboard" onClick={() => setSelectedPage("Home")}>
                <i
                  className="bx bx-grid-alt"
                  style={{ position: "relative", bottom: "7px" }}
                >
                  {selectedPage === "Home" ? (
                    <HomeFilledIcon
                      style={{ width: "1.3em", height: "3rem" }}
                    />
                  ) : (
                    <HomeIcon2  style={{ width: "1.7em", height: "3rem" }}/>
                  )}
                  <p
                    style={{
                      position: "absolute",
                      top: "25px",
                      left: "0.5rem",
                      fontStyle: "normal",
                      fontSize: "0.7rem",
                      color: selectedPage === "Home" ? "#E0623F" : "#A2AAAD",
                    }}
                  >
                    Home
                  </p>
                </i>
                <span
                  className="links_name"
                  onClick={windowDimensions <= 1077 ? setSidebar : null}
                >
                  Home
                </span>
              </Link>
              <span className="tooltip">Home</span>
            </li>
            <li>
              <Link to="/health-tracker">
                <i
                  className="bx bx-grid-alt"
                  onClick={() => setSelectedPage("myHealth")}
                  style={{ position: "relative", bottom: "7.1px" }}
                >
                  {selectedPage === "myHealth" ? (
                    <MyHealthFilledIcon style={{ width: "1.4em" }} />
                  ) : (
                    <MyHealthIcon style={{ width: "1.3em" }} />
                  )}
                  <p
                    style={{
                      position: "absolute",
                      top: "25px",
                      left: "-1rem",
                      width: "5rem",
                      fontStyle: "normal",
                      fontSize: "0.7rem",
                      color:
                        selectedPage === "myHealth" ? "#E0623F" : "#A2AAAD",
                    }}
                  >
                    My Health
                  </p>
                </i>
                <span
                  className="links_name"
                  onClick={windowDimensions <= 1077 ? setSidebar : null}
                >
                  My Health
                </span>
              </Link>
              <span className="tooltip">My Health</span>
            </li>
            <li>
              <Link to="/documentation">
                <i
                  className="bx bx-grid-alt"
                  onClick={() => setSelectedPage("Documents")}
                  style={{ position: "relative", bottom: "7px" }}
                >
                  {selectedPage === "Documents" ? (
                    <DocumentsFilledIcon style={{ width: "1.6em" }} />
                  ) : (
                    <DocumentsIcon
                      style={{ width: "1.3em", marginBottom: "2px" }}
                    />
                  )}
                  <p
                    style={{
                      position: "absolute",
                      top: "25px",
                      left: "-0.2rem",
                      fontStyle: "normal",
                      fontSize: "0.7rem",
                      color:
                        selectedPage === "Documents" ? "#E0623F" : "#A2AAAD",
                    }}
                  >
                    Documents
                  </p>
                </i>
                <span
                  className="links_name"
                  onClick={windowDimensions <= 1077 ? setSidebar : null}
                >
                  Documents
                </span>
              </Link>
              <span className="tooltip">Documents</span>
            </li>
          </div>

          <div className="restOfIcons">
            <li>
              <Link to="/dashboard">
                <i
                  className="bx bx-grid-alt"
                  onClick={windowDimensions >= 426 ? setSidebar : !setSidebar}
                >
                  <HomeIcon />
                </i>
                <span
                  className="links_name"
                  onClick={windowDimensions <= 1077 ? setSidebar : null}
                >
                  Dashboard
                </span>
              </Link>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <Link to="/calendar">
                <i
                  className="bx bx-chat"
                  onClick={windowDimensions >= 426 ? setSidebar : !setSidebar}
                >
                  <CalendarIcon />
                </i>
                <span
                  className="links_name"
                  onClick={windowDimensions <= 1077 ? setSidebar : null}
                >
                  Calendar
                </span>
              </Link>
              <span className="tooltip">Calendar</span>
            </li>

            <li>
              <Link to="/health-tracker">
                <i
                  className="bx bx-pie-chart-alt-2"
                  onClick={windowDimensions >= 426 ? setSidebar : !setSidebar}
                >
                  <HealthTrackerIcon />
                </i>
                <span
                  className="links_name"
                  onClick={windowDimensions <= 1077 ? setSidebar : null}
                >
                  Health Tracker
                </span>
              </Link>
              <span className="tooltip">Health Tracker</span>
            </li>
            <div>
              <li>
                {/* set Health&Wellbeing to true in order to display subpages */}

                <Link
                  to="#"
                  onClick={setHealthOpen}
                  className="healthWellbeing"
                >
                  <i
                    className="bx bx-folder"
                    // onClick={windowDimensions <= 1077 ? openNavbar : null}
                    onClick={windowDimensions >= 426 ? openNavbar : !openNavbar}
                  >
                    <HealthWellbeingIcon />
                  </i>
                  <span className="links_name">
                    Health & Wellbeing {healthOpen ? "▼" : "➤"}
                  </span>
                </Link>
                <span className="tooltip">Health & Wellbeing</span>
              </li>

              {/* if healthOpen is true, "My Health Records" will appear on the navbar */}
              <HealthRecords healthOpen={healthOpen} sidebar={sidebar}>
                <li>
                  <Link
                    to="#"
                    onClick={setHealthRecordsOpen}
                    className="healthRecords"
                  >
                    <i
                      className="bx bx-folder"
                      onClick={windowDimensions <= 1077 ? openNavbar : null}
                    >
                      <HealthRecordsIcon />
                    </i>
                    <span className="links_name">
                      My Health Records {healthRecordsOpen ? "▼" : "➤"}
                    </span>
                  </Link>
                  <span className="tooltip">My Health Records</span>
                </li>
                <RecordsMenu healthRecordsOpen={healthRecordsOpen}>
                  <li>
                    <Link to="/my-details">
                      <i className="bx bx-folder" onClick={setSidebar}>
                        <MyRecordsIcon />
                      </i>
                      <span
                        className="links_name"
                        onClick={windowDimensions <= 1077 ? setSidebar : null}
                      >
                        My Details
                      </span>
                    </Link>
                    <span className="tooltip">My Details</span>
                  </li>
                  <li>
                    <Link to="/my-allergies">
                      <i className="bx bx-folder" onClick={setSidebar}>
                        <AllergiesIcon />
                      </i>
                      <span
                        className="links_name"
                        onClick={windowDimensions <= 1077 ? setSidebar : null}
                      >
                        My Allergies
                      </span>
                    </Link>
                    <span className="tooltip">My Allergies</span>
                  </li>

                  <li>
                    <Link to="/my-conditions">
                      <i className="bx bx-folder" onClick={setSidebar}>
                        <ConditionsIcon />
                      </i>
                      <span
                        className="links_name"
                        onClick={windowDimensions <= 1077 ? setSidebar : null}
                      >
                        My Conditions
                      </span>
                    </Link>
                    <span className="tooltip">My Conditions</span>
                  </li>
                  <li>
                    <Link to="/my-procedures">
                      <i className="bx bx-folder" onClick={setSidebar}>
                        <ProceduresIcon />
                      </i>
                      <span
                        className="links_name"
                        onClick={windowDimensions <= 1077 ? setSidebar : null}
                      >
                        My Procedures
                      </span>
                    </Link>
                    <span className="tooltip">My Procedures</span>
                  </li>
                  <li>
                    <Link to="/my-questionnaires">
                      <i className="bx bx-folder" onClick={setSidebar}>
                        <QuestionnairesIcon />
                      </i>
                      <span
                        className="links_name"
                        onClick={windowDimensions <= 1077 ? setSidebar : null}
                      >
                        My Questionnaires
                      </span>
                    </Link>
                    <span className="tooltip">My Questionnaires</span>
                  </li>
                  <li>
                    <Link to="/my-documentation">
                      <i className="bx bx-folder" onClick={setSidebar}>
                        <DocumentationIcon />
                      </i>
                      <span
                        className="links_name"
                        onClick={windowDimensions <= 1077 ? setSidebar : null}
                      >
                        My Documentation
                      </span>
                    </Link>
                    <span className="tooltip">My Documentation</span>
                  </li>
                  <li>
                    <Link to="/my-test-results">
                      <i className="bx bx-folder" onClick={setSidebar}>
                        <MyTestResultsIcon />
                      </i>
                      <span
                        className="links_name"
                        onClick={windowDimensions <= 1077 ? setSidebar : null}
                      >
                        My Test Results
                      </span>
                    </Link>
                    <span className="tooltip">My Test results</span>
                  </li>
                </RecordsMenu>
                <li>
                  <Link to="/caresphere">
                    <i className="bx bx-folder" onClick={setSidebar}>
                      <CaresphereIcon />
                    </i>
                    <span
                      className="links_name"
                      onClick={windowDimensions <= 1077 ? setSidebar : null}
                    >
                      Caresphere
                    </span>
                  </Link>
                  <span className="tooltip">Caresphere</span>
                </li>
                <li>
                  <Link to="/my-care-plans">
                    <i className="bx bx-folder" onClick={setSidebar}>
                      <CarePlansIcon />
                    </i>
                    <span
                      className="links_name"
                      onClick={windowDimensions <= 1077 ? setSidebar : null}
                    >
                      My Care Plans
                    </span>
                  </Link>
                  <span className="tooltip">My Care Plans</span>
                </li>
              </HealthRecords>
            </div>
          </div>
          <li className="profile">
            <div className="profile-details">
              <div className="name_job">
                <div className="name">Name Surname</div>
                <div className="job">Role</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out">
              <LoginIcon />
            </i>
          </li>
        </ul>
      </Sidebar>
    </>
  );
}
