// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// Import: Elements
import { SectionContainer } from "./MyProcedures.elements";
import { ListViewContainer } from "../../../../styles/ListsView/ListView.elements";

// Import: reducer
import { getProcedureDetail } from "../../../../../redux/slices/ProceduresSlice";

// Import: Components
import { PageHeader } from "../../../../components";
import MyProcedureDetails from "./MyProcedureDetails/MyProcedureDetails.component";

// Import: Assets
import proceduresIcon from "../../../../../assets/img/icons/dashboardProceduresIcon.svg";
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";

// Component: MyConditions
export default function MyProcedures({ sidebar }) {
  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);
  const dispatch = useDispatch();
  const proceduresList = useSelector(
    (state) => state.procedures.procedures.proceduresList
  );

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
            <MyProcedureDetails popUp={popUp} setPopUp={setPopUp} />
          ) : null}
          <PageHeader title={"Procedures"} returnRoute={"/dashboard"} />
          <div id="iconBg">
            <img id="proceduresIcon" src={proceduresIcon} alt="Procedures" />
          </div>

          <ListViewContainer>
            <ul>
              {proceduresList.length > 0 &&
                proceduresList.map((procedures, index) => (
                  <li
                    id="cardContainer"
                    key={index}
                    onClick={() => {
                      setPopUp(!popUp);
                      dispatch(getProcedureDetail());
                    }}
                  >
                    <div id="cardTextContainer">
                      <h2 id="cardHeader">
                        {procedures.procedureName
                          ? procedures.procedureName
                          : "No Current Procedures"}
                      </h2>
                      <div className="allergySeverityContainer">
                        <h3 className=" cardDetailText">
                          Status:{" "}
                          <span>
                            {procedures.status ? procedures.status : "N/A"}
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
