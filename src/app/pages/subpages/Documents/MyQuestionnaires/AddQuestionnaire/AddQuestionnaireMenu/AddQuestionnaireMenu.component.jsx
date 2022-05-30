import React from "react";
import { ListViewContainer } from "../../../../../../styles/ListsView/ListView.elements";
import { AddQuestionnaireMenuContainer } from "./AddQuestionnireMenu.elements";
import questionnaireIcon from "../../../../../../../assets/img/icons/Dashboard/dashboardQuestionnaireIcon.svg";
import exitIcon from "../../../../../../../assets/img/icons/exitCross.svg";

export default function AddQuestionnaireMenu({ setPopUp, popUp }) {
  return (
    <AddQuestionnaireMenuContainer
      setPopUp={setPopUp}
      popUp={popUp}
      AddQuestionnaireMenu={true}
    >
      <div id="cardHeader">
        <div id="cardHeaderIcon">
          <img src={questionnaireIcon} />
        </div>
        <div id="cardHeaderText">
          <h1>Start a new Questionnaire</h1>
          <p>Please select from the list below</p>
        </div>
        <div id="exitIcon" onClick={() => setPopUp(!popUp)}>
          <img  src={exitIcon} />
        </div>
      </div>
      <div id="questionnaireListContainer">
      <ListViewContainer questionnaireMenu={true}>
        <ul>
          <li id="cardContainer">
            <div></div>
            <h2 className="cardDetailText">Sleep Apnea Questionnaire</h2>
            <div className="arrowIcon">
              <p>Start</p>
            </div>
          </li>
          {/* <li id="cardContainer">Questionnaire #2</li>
          <li id="cardContainer">Questionnaire #3</li> */}
        </ul>
      </ListViewContainer>
      </div>
    </AddQuestionnaireMenuContainer>
  );
}
