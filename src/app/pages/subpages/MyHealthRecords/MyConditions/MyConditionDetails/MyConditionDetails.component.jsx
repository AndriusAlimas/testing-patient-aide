// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp, MHRTable } from "../../../../../components";

// Import: Constants
import { conditions } from "../../../../../../assets/constants/constants";

export default function MyConditionDetails({ setPopUp, popUp, conditionDetails }) {
  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <table id="conditionDetails">
        <tbody>
          <tr>
            <td>{conditions.ConditionName}</td>
            <td>{conditionDetails.ConditionName}</td>
          </tr>
          <tr>
            <td>{conditions.ProblemCode}</td>
            <td>{conditionDetails.ProblemCode}</td>
          </tr>
          <tr>
            <td>{conditions.Category}</td>
            <td>{conditionDetails.Category}</td>
          </tr>
          <tr>
            <td>{conditions.CreatedAt}</td>
            <td>{conditionDetails.CreatedAt}</td>
          </tr>
          <tr>
            <td>{conditions.CreatedBy}</td>
            <td>{conditionDetails.CreatedBy}</td>
          </tr>
          <tr>
            <td>{conditions.CreatedByID}</td>
            <td>{conditionDetails.CreatedByID}</td>
          </tr>
          <tr>
            <td>{conditions.status}</td>
            <td>{conditionDetails.status}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
