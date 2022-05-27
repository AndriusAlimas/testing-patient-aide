// Import: Packages
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Import: Elements
import { SectionContainer } from "./MyDocumentation.elements";
import { ListViewContainer } from "../../../../Styles/ListsView/ListView.elements";

// Import: dummyDocuments
import { documents } from "../../../../demo-data/dummyDocuments/dummyDocuments";

// Import: Assets
import documentsIcon from "../../../../../assets/img/icons/Dashboard/dashboardDocumentsIcon.svg";
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";

// Import: Components
import { PageHeader } from "../../../../components";
import ViewDocument from "./ViewDocument/viewDocument.component";

// Component: MyConditions
export default function MyDocumentation({ sidebar }) {
  const [popUp, setPopUp] = useState(false);
  const { pageTransitionsStyle } = useSelector(
    (state) => state.pageTransitions
  );
  const toViewDocument = useRef("");

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer sidebar={sidebar} data-testid="myDocumentation">
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
          <div className="documentCardsContainer">
            <GenericCard
              document="true"
              download="true"
              title="All correspondence mr Benjamin Anderson 20210928125114"
              iconColor="#008AA2"
              infoDisplay="Created: sep 4, 2021"
            >
              <div>
                <h2 className="singleh2">Type: All correspondence</h2>
              </div>
            </GenericCard>
            <GenericCard
              document="true"
              download="true"
              title="RGM OP Appointment NPH MrRobert Chilcott 20210318083845675892"
              iconColor="#008AA2"
              infoDisplay="Created: sep 4, 2021"
            >
              <div>
                <h2 className="singleh2">Type: Appointment Letter</h2>
              </div>
            </GenericCard>
            <GenericCard
              document="true"
              download="true"
              title="RGM OP Appointment NPH MrRobert Chilcott 20210318083845576632"
              iconColor="#008AA2"
              infoDisplay="Created: sep 4, 2021"
            >
              <div>
                <h2 className="singleh2">Type: Appointment Letter</h2>
              </div>
            </GenericCard>
            <GenericCard
              document="true"
              title="RGM OP Appointment NPH MrRobert Chilcott 20210318083845448522"
              iconColor="#008AA2"
              infoDisplay="Created: sep 4, 2021"
            >
              <div>
                <h2 className="singleh2">Type: Appointment Letter</h2>
              </div>
            </GenericCard>
            <GenericCard
              document="true"
              download="true"
              title="PatientAide Registration Letter OpenID Service 202103180838"
              iconColor="#008AA2"
              infoDisplay="Created: sep 4, 2021"
            >
              <div>
                <h2 className="singleh2">Type: PatientAide Registration</h2>
              </div>
            </GenericCard>
            <GenericCard
              document="true"
              title="PatientAide Registration Letter OpenID Service 202103180838"
              iconColor="#008AA2"
              infoDisplay="Created: sep 4, 2021"
            >
              <div>
                <h2 className="singleh2">Type: PatientAide Registration</h2>
              </div>
            </GenericCard>
          </div>
        </div> */}

        <div className="mobileVersion">
          {popUp && (
            <ViewDocument
              setPopUp={setPopUp}
              popUp={popUp}
              document={toViewDocument.current}
            />
          )}
          <PageHeader title="Documents" returnRoute="/" />
          <div id="iconBg">
            <img src={documentsIcon} id="DocumentIcon" />
          </div>

          <ListViewContainer>
            <ul>
              {documents.map((document, index) => (
                <li
                  id="cardContainer"
                  key={index}
                  onClick={() => {
                    setPopUp(!popUp);
                    toViewDocument.current = document.file;
                  }}
                >
                  <div id="cardTextContainer">
                    <h2 id="cardHeader">
                      {document.name ? document.name : "No Known Allergies"}
                    </h2>
                    <h3 className="cardDetailText">
                      Type: <span>{document.type}</span>
                    </h3>
                  </div>
                  <div className="arrowIcon">
                    <p>Details</p>
                    <img src={rightArrow} alt="right arrow" />
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
