// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// Import: Components
import MyAllergyDetails from "./MyAllergyDetails/MyAllergyDetails.component";
import { PageHeader } from "../../../../components";

// Import: Elements
import { SectionContainer } from "./MyAllergies.elements";
import { ListViewContainer } from "../../../../Styles/ListsView/ListView.elements";

// Import: Assets
import allergyIcon from "../../../../../assets/img/icons/dashboardAllergiesIcon.svg";
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";

// Import: DummyAllergyData
// import { allergies } from "../../../../demo-data/dummyAllergies";
import { getAllergyDetails } from "../../../../../redux/slices/Allergies";

export default function MyAllergies({ sidebar }) {
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);

  const allergiesList = useSelector((state) => state.allergies.allergiesList);

  const allergyDetails = useRef("");

  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const handleOnClick = () => {
    dispatch(getAllergyDetails(allergyDetails.current.id));
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
        data-testid="myAllergies"
        popUp={popUp}
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
            <GenericCard title="Aspirin">
              <h2>
                Level of Severity: <span></span>
              </h2>
            </GenericCard>
            <GenericCard title="Egg Custard">
              <h2>
                Level of Severity: <span></span>
              </h2>
            </GenericCard>
          </div>
        </div> */}

        <div className="mobileVersion" onClick={handleOnClick}>
          {popUp ? (
            <MyAllergyDetails popUp={popUp} setPopUp={setPopUp} />
          ) : null}
          <PageHeader title="Allergies" returnRoute={"/dashboard"} />
          <div id="iconBg">
            <img src={allergyIcon} id="allergyIcon" />
          </div>

          <ListViewContainer>
            <ul>
              {allergiesList.length > 0 &&
                allergiesList.map((allergy, index) => (
                  <li
                    id="cardContainer"
                    key={index}
                    onClick={() => {
                      setPopUp(!popUp);
                      allergyDetails.current = allergy;
                    }}
                  >
                    <div id="cardTextContainer">
                      <h2 id="cardHeader">
                        {allergy.allergyName
                          ? allergy.allergyName
                          : "No Known Allergies"}
                      </h2>
                      <div className="allergySeverityContainer">
                        <h3 className=" cardDetailText">
                          Severity: <span>{allergy.reactionDisplay}</span>
                        </h3>
                      </div>
                      <div className="arrowIcon">
                        <p>Details</p>
                        <img src={rightArrow} alt="right arrow" />
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
