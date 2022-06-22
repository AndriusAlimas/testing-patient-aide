// Import: Packages
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestionnaireSort } from "../../../redux/slices/QuestionnaireSlice";

// Import: Elements
import { SortByFilterContainer } from "./SortBy.elements";

import sortIconAscending from "../../../assets/img/icons/sortAscending.svg";

// Component: SortBy
export default function SortBy() {
  const dispatch = useDispatch();
  const { sortDateStatus } = useSelector((state) => state.questionnaire);

  const handleClick = () => {
    sortDateStatus === "dateAscending"
      ? dispatch(updateQuestionnaireSort("dateDescending"))
      : dispatch(updateQuestionnaireSort("dateAscending"));
  };

  return (
    <SortByFilterContainer sortDateStatus={sortDateStatus}>
      <img src={sortIconAscending} onClick={handleClick} alt="Sort Ascending" />
    </SortByFilterContainer>
  );
}
