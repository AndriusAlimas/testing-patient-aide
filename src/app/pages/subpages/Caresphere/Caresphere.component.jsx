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
  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const caresphereContact = useRef("");

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer id="mobile">
        {popUp ? (
          <CaresphereContactDetails
            popUp={popUp}
            setPopUp={setPopUp}
            caresphereContact={caresphereContact.current}
          />
        ) : null}
        <PageHeader title={"Care Contacts"} returnRoute={"/dashboard"} />
        <div id="iconBg">
          <img src={careContactsIcon} id="careContactsIcon" />
        </div>
        <ListViewContainer>
          <ul className="careSphereList">
            {caresphereData.map((contact, index) => (
              <li
                id="cardContainer"
                key={index}
                onClick={() => {
                  setPopUp(!popUp);
                  caresphereContact.current = contact;
                }}
              >
                <div id="cardTextContainer">
                  <h2 id="cardHeader">{contact.relationship}</h2>
                  <h3 className="cardDetailText">
                    {contact.ID
                      ? `${contact.firstName} ${contact.surname}`
                      : "No Known Allergies"}
                  </h3>
                  <div className="contactInfoContainer">
                    <h4 className="cardDetailText">
                      <span id="telephone">{contact.telephone}</span>
                    </h4>
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
      </SectionContainer>
    </motion.div>
  );
}
