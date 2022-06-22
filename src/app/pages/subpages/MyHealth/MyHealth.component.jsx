import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { Card } from "react-bootstrap";
import myHealth from "../../../../assets/img/images/myHealth.jpg";
import healthAndWellbeing from "../../../../assets/img/images/healthAndWellbeing.jpg";
import { ProfilePopUp, PageHeader } from "../../../components";
// Import: Elements
import { SectionContainer, CardContainer } from "./MyHealth.elements";

export default function MyHealth() {
  const [patientModal, setPatientModal] = useState(false);
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);
  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer data-testid="myHealth">
        <div className="mobileVersion">
          {patientModal && (
            <ProfilePopUp
              setPatientModal={setPatientModal}
              patientModal={patientModal}
            />
          )}
          <PageHeader title="My Health" />
          <div className="setOfCards">
            <CardContainer>
              <Link to="/health-tracker">
                <Card className="card">
                  <Card.Img className="cardImg" variant="top" src={myHealth} />
                  <Card.Body className="cardBody">
                    <div className="details">
                      <div className="cardInformation">
                        <Card.Title className="title" style={{ margin: "0" }}>
                          Health Tracker
                        </Card.Title>
                        <Card.Text className="text">
                          Check your health tracker.
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/my-health-records">
                <Card className="card">
                  <Card.Img
                    className="cardImg"
                    variant="top"
                    src={healthAndWellbeing}
                  />
                  <Card.Body className="cardBody">
                    <div className="details">
                      <div className="cardInformation">
                        <Card.Title className="title" style={{ margin: "0" }}>
                          Health and Wellbeing
                        </Card.Title>
                        <Card.Text className="text">
                          Touch <b>here</b> to see full menu.
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/my-visits">
                <Card className="card">
                  <Card.Img
                    className="cardImg"
                    variant="top"
                    src={healthAndWellbeing}
                  />
                  <Card.Body className="cardBody">
                    <div className="details">
                      <div className="cardInformation">
                        <Card.Title className="title" style={{ margin: "0" }}>
                          My Visits
                        </Card.Title>
                        <Card.Text className="text">
                          Displays information about previous hospital visits,
                          questionnaires and Medications.
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </CardContainer>
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  );
}
