// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Import: Elements
import { ListViewContainer } from "../../../styles/ListsView/ListView.elements";
import { SectionContainer } from "./Caresphere.elements";

// Import: Assets
import careContactsIcon from "../../../../assets/img/icons/careContactsIcon.svg";
import rightArrow from "../../../../assets/img/icons/Left-Chevron.svg";

// Import: Components
import { PageHeader } from "../../../components";
import CaresphereContactDetails from "./CaresphereContactDetails/CaresphereContactDetails";

// Import: DummyData
import { caresphereData } from "../../../demo-data/dummyCaresphere";

// Component
export default function Caresphere() {
  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);
  const caresphereContact = useRef("");

  const nok = useSelector((state) => {
    return state.user.nextOfKin;
  });

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer id="mobile">
        {popUp && (
          <CaresphereContactDetails
            popUp={popUp}
            setPopUp={setPopUp}
            caresphereContact={nok}
          />
        )}
        <PageHeader title={"Care Contacts"} returnRoute={"/dashboard"} />
        <div id="iconBg">
          <img
            src={careContactsIcon}
            id="careContactsIcon"
            alt="Care Contacts"
          />
        </div>
        <ListViewContainer>
          <ul className="careSphereList">
            {/* {caresphereData.map((contact, index) => ( */}
            <li
              id="cardContainer"
              key={nok.ID}
              onClick={() => {
                setPopUp(!popUp);
              }}
            >
              <div id="cardTextContainer">
                <h2 id="cardHeader">{nok.relationship}</h2>
                <h3 className="cardDetailText">
                  {nok.ID
                    ? `${nok.firstname} ${nok.surname}`
                    : "No Known Allergies"}
                </h3>
                <div className="nokInfoContainer">
                  <h4 className="cardDetailText">
                    <span id="telephone">{nok.telephone}</span>
                  </h4>
                </div>
                <div className="arrowIcon">
                  <p>Details</p>
                  <img src={rightArrow} alt="right arrow" />
                </div>
              </div>
            </li>
            {/* ))} */}
          </ul>
        </ListViewContainer>
      </SectionContainer>
    </motion.div>
  );
}
