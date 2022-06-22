import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { Card } from "react-bootstrap";

// Import: Elements
import { SectionContainer, CardContainer } from "./Documents.elements";

// Import: Components
import { PageHeader } from "../../../components";

export default function Documents() {
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);
  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      <SectionContainer data-testid="documents">
        <div className="mobileVersion">
          <PageHeader title="My Documents" />
          <div className="setOfCards">
            <CardContainer>
              <Link to="/my-documentation">
                <Card className="card">
                  <Card.Img className="cardImg" variant="top" src={""} />

                  <Card.Body className="cardBody">
                    <div className="details">
                      <div className="cardInformation">
                        <Card.Title className="title" style={{ margin: "0" }}>
                          Documents
                        </Card.Title>
                        <Card.Text className="text">
                          See your documents.
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </CardContainer>

            <CardContainer>
              <Link to="/my-questionnaires">
                <Card className="card">
                  <Card.Img className="cardImg" variant="top" src={""} />

                  <Card.Body className="cardBody">
                    <div className="details">
                      <div className="cardInformation">
                        <Card.Title className="title" style={{ margin: "0" }}>
                          Questionnaires
                        </Card.Title>
                        <Card.Text className="text">
                          See you questionnaires.
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </CardContainer>
            <CardContainer>
              <Link to="/my-test-results">
                <Card className="card">
                  <Card.Img className="cardImg" variant="top" src={""} />

                  <Card.Body className="cardBody">
                    <div className="details">
                      <div className="cardInformation">
                        <Card.Title className="title" style={{ margin: "0" }}>
                          Test Results
                        </Card.Title>
                        <Card.Text className="text">
                          Check your test results.
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
