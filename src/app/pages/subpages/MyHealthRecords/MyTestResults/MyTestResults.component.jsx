// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Import: Elements
import { SectionContainer } from "./MyTestResults.elements";
import { ListViewContainer } from "../../../../styles/ListsView/ListView.elements";

// Import: Components
import { GenericCard } from "../../../../components";
import { PageHeader } from "../../../../components";

import testResultsIcon from "../../../../../assets/img/icons/Dashboard/dashboardTestResultsIcon.svg";
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";

// Import: dummyData
import { testResults } from "../../../../demo-data/dummyTestResults";
import MyTestResultsDetails from "./MyTestResultsDetails/MyTestResultsDetails.component";

// Component: MyConditions
export default function MyTestResults({ sidebar }) {
  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);

  const testResultDetailsRef = useRef();

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer sidebar={sidebar} data-testid="myTestResults">
        {/* <GenericCard patientCard={true} title="Smith, Jane">
          <h2>
            Age <span></span>
          </h2>
          <h2>
            Height <span></span>
          </h2>
          <h2>
            Weight <span></span>
          </h2>
        </GenericCard>
        <div className="cardsWrapContainer">
          <GenericCard
            title="XR Chest and Lateral"
            iconColor="#008AA2"
            infoDisplay="Created August 14, 2021"
          >
            <div>
              <h2 className="singleh2">Status: Final</h2>
            </div>
          </GenericCard>
          <GenericCard
            title="Blood Group"
            iconColor="#008AA2"
            infoDisplay="Created August 14, 2021"
          >
            <div>
              <h2 className="singleh2">Status: Final</h2>
            </div>
          </GenericCard>
          <GenericCard
            title="1st Group comment"
            iconColor="#008AA2"
            infoDisplay="Created August 14, 2021"
          >
            <div>
              <h2 className="singleh2">Status: Final</h2>
            </div>
          </GenericCard>
          <GenericCard
            title="Anti-Body Screen (ABSC)"
            iconColor="#008AA2"
            infoDisplay="Created August 14, 2021"
          >
            <div>
              <h2 className="singleh2">Status: Final</h2>
            </div>
          </GenericCard>
        </div> */}

        <div className="mobileVersion">
          {popUp && (
            <MyTestResultsDetails
              popUp={popUp}
              setPopUp={setPopUp}
              testResultDetails={testResultDetailsRef.current}
            />
          )}
          <PageHeader title={"Test Results"} returnRoute={"/dashboard"} />
          <div id="iconBg">
            <img
              id="proceduresIcon"
              src={testResultsIcon}
              alt="Procedures Icon"
            />
          </div>

          <ListViewContainer>
            <ul>
              {testResults.map((tests, index) => (
                <li
                  id="cardContainer"
                  key={index}
                  onClick={() => {
                    setPopUp(!popUp);
                    testResultDetailsRef.current = tests;
                  }}
                >
                  <div id="cardTextContainer">
                    <h2 id="cardHeader">
                      {tests.name ? tests.name : "No Current Procedures"}
                    </h2>
                    <div className="allergySeverityContainer">
                      <h3 className=" cardDetailText">
                        <span>{tests.created}</span>
                      </h3>
                      <div className="arrowIcon">
                        <p>Details</p>
                        <img src={rightArrow} alt="right arrow" />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ListViewContainer>
        </div>
      </SectionContainer>
    </motion.div>
  );
}
