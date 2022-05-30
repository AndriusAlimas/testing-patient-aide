// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Import: Elements
import { SectionContainer } from "./MyConditions.elements";
import { ListViewContainer } from "../../../../styles/ListsView/ListView.elements";

// Import: Components
import { PageHeader } from "../../../../components";
import MyConditionDetails from "./MyConditionDetails/MyConditionDetails.component";

// Import: Assets
import conditionsIcon from "../../../../../assets/img/icons/dashboardConditionsIcon.svg";
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";

// Import: dummyData
import { conditions } from "../../../../demo-data/dummyConditions";

// Component: MyConditions
export default function MyConditions({ sidebar }) {
  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const conditionDetails = useRef("");

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer
        sidebar={sidebar}
        data-testid="myConditions"
        popUp={popUp}
        // ref={conditionDetailsScrollRef}
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
            conditionCard="true"
            title="Blurred Vision"
            infoDisplay="Active"
          />
          <GenericCard
            conditionCard="true"
            title="HOCM- Hypertrophic Obstructive cardiomyopathy"
            infoDisplay="Active"
          />
          <GenericCard
            conditionCard="true"
            title="Barking cough"
            infoDisplay="Active"
          />
          <GenericCard
            conditionCard="true"
            title="Atrial Fibriliation"
            infoDisplay="Active"
          />
          <GenericCard
            conditionCard="true"
            title="Acute headache"
            infoDisplay="Active"
          />
          <GenericCard
            conditionCard="true"
            title="Dizzy spells"
            infoDisplay="Active"
          />
        </div>
      </div> */}

        <div className="mobileVersion">
          {popUp ? (
            <MyConditionDetails
              popUp={popUp}
              setPopUp={setPopUp}
              conditionDetails={conditionDetails.current}
            />
          ) : null}
          <PageHeader title="Conditions" returnRoute={"/dashboard"} />
          <div id="iconBg">
            <img id="conditionIcon" src={conditionsIcon} />
          </div>
          <ListViewContainer>
            <ul>
              {conditions.map((condition, index) => (
                <li
                  id="cardContainer"
                  key={index}
                  onClick={() => {
                    setPopUp(!popUp);
                    conditionDetails.current = condition;
                  }}
                >
                  <div id="cardTextContainer">
                    <h2 id="cardHeader">
                      {condition.ConditionName
                        ? condition.ConditionName
                        : "No Current Conditions"}
                    </h2>
                    <div className="allergySeverityContainer">
                      <h3 className=" cardDetailText">
                        Status:{" "}
                        <span>
                          {condition.status ? condition.status : "N/A"}
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
