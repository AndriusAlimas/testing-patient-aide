import React, { useState } from "react";
import AddQuestionnaireMenu from "../AddQuestionnaireMenu/AddQuestionnaireMenu.component";
import { AddQuestionnaireContainer } from "./AddQuestionnaireButton.elements";

export default function AddQuestionnaire({
  addNewQuestionnaire,
  setAddNewQuestionnaire,
}) {
  const [popUp, setPopUp] = useState(false);

  popUp === true ? setAddNewQuestionnaire(true) : setAddNewQuestionnaire(false);

  return (
    <>
      {popUp && <AddQuestionnaireMenu setPopUp={setPopUp} popUp={popUp} />}
      <AddQuestionnaireContainer
        onClick={() => {
          setPopUp(!popUp);
          setAddNewQuestionnaire(true);
        }}
      >
        <p>Add Questionnaire</p>
      </AddQuestionnaireContainer>
    </>
  );
}
