import React, { useState } from "react";
import { AddQuestionnaireContainer } from "./AddQuestionnaire.elements";

export default function AddQuestionnaire() {
  const [popUp, setPopUp] = useState("false");

  return (
    // {popUp && <AddQuestionnairePopUp/>}
    <AddQuestionnaireContainer>
      <h1>Add</h1>
    </AddQuestionnaireContainer>
  );
}
