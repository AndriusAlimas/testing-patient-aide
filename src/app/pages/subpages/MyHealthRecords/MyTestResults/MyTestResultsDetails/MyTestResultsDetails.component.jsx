// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp } from "../../../../../components";

export default function MyTestResultsDetails({ setPopUp, popUp, testResultDetails }) {

  
  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <table id="MyAllergyDetails">
        <tbody>
          <tr>
            <td>Type:</td>
            <td>{testResultDetails.name}</td>
          </tr>
          <tr>
            <td>Date Created:</td>
            <td>{testResultDetails.created}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
