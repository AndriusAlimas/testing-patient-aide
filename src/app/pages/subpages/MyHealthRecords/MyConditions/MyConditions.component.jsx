// Import: Packages
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

// Import: Elements
import { SectionContainer } from "./MyConditions.elements";
import { ListViewContainer } from "../../../../styles/ListsView/ListView.elements";

// Import: Components
import { PageHeader } from "../../../../components";
import MyConditionDetails from "./MyConditionDetails/MyConditionDetails.component";

// Import: Assets
import conditionsIcon from "../../../../../assets/img/icons/dashboardConditionsIcon.svg";
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";
import { getConditionDetail } from "../../../../../redux/slices/ConditionsSlice";
import { getPractitionerDetails } from "../../../../../redux/slices/PractitionerSlice";

// Component: MyConditions
export default function MyConditions({ sidebar }) {
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);
  const conditionsList = useSelector(
    (state) => state.conditions.conditions.proceduresList
  );

  const handleOnClick = async () => {
    await dispatch(getConditionDetail())
      .then((practitionerDetails) =>
        dispatch(getPractitionerDetails(practitionerDetails.payload.createdBy))
      )
      .then(setPopUp(!popUp));
  };

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
          {popUp && <MyConditionDetails popUp={popUp} setPopUp={setPopUp} />}
          <PageHeader title="Conditions" returnRoute={"/dashboard"} />
          <div id="iconBg">
            <img id="conditionIcon" src={conditionsIcon} alt="Condition" />
          </div>
          <ListViewContainer>
            <ul>
              {conditionsList.length > 0 &&
                conditionsList.map((condition, index) => (
                  <li id="cardContainer" key={index} onClick={handleOnClick}>
                    <div id="cardTextContainer">
                      <h2 id="cardHeader">
                        {condition.problemName
                          ? condition.problemName
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
