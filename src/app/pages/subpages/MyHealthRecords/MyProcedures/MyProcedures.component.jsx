// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Import: Elements
import { SectionContainer } from "./MyProcedures.elements";
import { ListViewContainer } from "../../../../styles/ListsView/ListView.elements";

// Import: Components
import { PageHeader } from "../../../../components";
import MyProcedureDetails from "./MyProcedureDetails/MyProcedureDetails.component";

// Import: Assets
import proceduresIcon from "../../../../../assets/img/icons/dashboardProceduresIcon.svg";
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";

// Import: DummyData
import { procedures } from "../../../../demo-data/dummyProcedureData";

// Component: MyConditions
export default function MyProcedures({ sidebar }) {
  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const procedureDetails = useRef("");

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer
        sidebar={sidebar}
        data-testid="myProcedures"
        //  ref={procedureDetailsScrollRef}
      >
        {/* <div className="desktopVersion">
          <GenericCard patientCard={true} title="Smith, Jane">
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
              title="Appendectomy"
              iconColor="#008AA2"
              infoDisplay="February 3, 2021"
            >
              <div>
                <h2>Date</h2>
                <h2>Time</h2>
              </div>
            </GenericCard>
          </div>
        </div> */}

        <div className="mobileVersion">
          {popUp ? (
            <MyProcedureDetails
              popUp={popUp}
              setPopUp={setPopUp}
              procedureDetails={procedureDetails.current}
            />
          ) : null}
          <PageHeader title={"Procedures"} returnRoute={"/dashboard"} />
          <div id="iconBg">
            <img id="proceduresIcon" src={proceduresIcon} />
          </div>

          <ListViewContainer>
            <ul>
              {procedures.map((procedures, index) => (
                <li
                  id="cardContainer"
                  key={index}
                  onClick={() => {
                    setPopUp(!popUp);
                    procedureDetails.current = procedures;
                  }}
                >
                  <div id="cardTextContainer">
                    <h2 id="cardHeader">
                      {procedures.ProcedureName
                        ? procedures.ProcedureName
                        : "No Current Procedures"}
                    </h2>
                    <div className="allergySeverityContainer">
                      <h3 className=" cardDetailText">
                        Status:{" "}
                        <span>
                          {procedures.Status ? procedures.Status : "N/A"}
                        </span>
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
