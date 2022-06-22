// Import: Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { updateCompletionStatus } from "../../../../../redux/slices/QuestionnaireSlice";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Import: Elements
import { SectionContainer, Overlay } from "./MyQuestionnaires.elements";
import { ListViewContainer } from "../../../../styles/ListsView/ListView.elements";

// Import: Assets
import rightArrow from "../../../../../assets/img/icons/Left-Chevron.svg";
import questionnaireIcon from "../../../../../assets/img/icons/Dashboard/dashboardQuestionnaireIcon.svg";

// Import: Components
import { PageHeader } from "../../../../components";
import { SortBy } from "../../../../components";
import AddQuestionnaire from "./AddQuestionnaire/AddQuestionnaireButton/AddQuestionnaireButton.component";

export default function MyQuestionnaires({ sidebar }) {
  const [addNewQuestionnaire, setAddNewQuestionnaire] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const questionnairesList = useSelector(
    (state) => state.questionnaire.questionnairesList
  );

  const { sortDateStatus } = useSelector((state) => state.questionnaire);
  const { completionStatus } = useSelector((state) => state.questionnaire);
  const { pageTransitionsStyle } = useSelector((state) => state.uiTriggers);

  const encounterQuestionnaires = () => {
    if (location.state?.encounter) {
      const { encounter } = location.state;
      return questionnairesList.filter((questionnaire) => {
        return questionnaire.encounter === encounter.encounterID;
      });
    } else {
      return questionnairesList;
    }
  };

  const displayQuestionnaires = () => {
    if (completionStatus === "complete") {
      return encounterQuestionnaires().filter(
        (questionnaire) => questionnaire.status === "completed"
      );
    } else if (completionStatus === "in-progress") {
      return encounterQuestionnaires().filter(
        (questionnaire) => questionnaire.status === "in-progress"
      );
    }
  };

  const questionnairesSorted = () => {
    if (sortDateStatus === "dateAscending") {
      return displayQuestionnaires().sort((a, b) => {
        return (
          new Date(b.alertStatus[2].valueDateTime) -
          new Date(a.alertStatus[2].valueDateTime)
        );
      });
    } else if (sortDateStatus === "dateDescending") {
      return displayQuestionnaires().sort((a, b) => {
        return (
          new Date(a.alertStatus[2].valueDateTime) -
          new Date(b.alertStatus[2].valueDateTime)
        );
      });
    }
  };

  return (
    <motion.div
      initial={pageTransitionsStyle.initial}
      animate={pageTransitionsStyle.animate}
      exit={pageTransitionsStyle.exit}
      transition={pageTransitionsStyle.transition}
    >
      {<Overlay addNewQuestionnaire={addNewQuestionnaire}></Overlay>}
      <SectionContainer
        sidebar={sidebar}
        completionStatus={completionStatus}
        data-testid={"myQuestionnaires"}
        addNewQuestionnaire={addNewQuestionnaire}
      >
        <div className="mobileVersion">
          <PageHeader
            title="Questionnaires"
            returnRoute={location.state ? "/my-visit-details" : "/"}
            encounter={location.state?.encounter}
            sortFunction="true"
          />
          <div id="iconBg">
            <img
              src={questionnaireIcon}
              id="QuestionnaireIcon"
              alt="Questionnaire Icon"
            />
          </div>
          {location.state && (
            <AddQuestionnaire
              addNewQuestionnaire={addNewQuestionnaire}
              setAddNewQuestionnaire={setAddNewQuestionnaire}
            />
          )}
          <div id="questionnaireStatus">
            <div
              id="statusPendingContainer"
              onClick={() => dispatch(updateCompletionStatus("in-progress"))}
            >
              <h2>Pending</h2>
            </div>
            <div
              id="statusCompleteContainer"
              onClick={() => dispatch(updateCompletionStatus("complete"))}
            >
              <h2>Complete</h2>
            </div>
            <SortBy />
          </div>
          {/* questionnaire Cards */}
          <ListViewContainer>
            <ul>
              {questionnairesSorted().map((questionnaire, index) => {
                return (
                  <Link
                    key={index}
                    to={
                      questionnaire.questionnaireName === "RWW ED Triage Form"
                        ? "/questionnaire"
                        : questionnaire.questionnaireName ===
                          "RWW ED Triage Assessment"
                        ? "/cpapform"
                        : "#"
                    }
                  >
                    <li id="cardContainer" key={index}>
                      <div id="cardTextContainer">
                        <h2 id="cardHeader">
                          {questionnaire.questionnaireName}
                        </h2>
                        <h3 className=" cardDetailText">
                          <span>{questionnaire.status}</span>
                        </h3>
                        <h3 className=" cardDetailText">
                          <span>
                            {moment(
                              questionnaire.alertStatus[2].valueDateTime
                            ).format("DD/MM/YYYY MM:HH")}
                          </span>
                        </h3>
                      </div>
                      <div className="arrowIcon">
                        <p>Details</p>
                        <img src={rightArrow} alt="right arrow" />
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </ListViewContainer>
        </div>
      </SectionContainer>
    </motion.div>
  );
}
