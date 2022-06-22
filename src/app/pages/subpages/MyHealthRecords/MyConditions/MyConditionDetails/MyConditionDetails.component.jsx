// Import: Packages
import React, { useEffect } from "react";

// Import: Components
import { GenericPopUp } from "../../../../../components";

// Import: Constants
import { conditions } from "../../../../../../assets/constants/constants";
import { useSelector } from "react-redux";

export default function MyConditionDetails({ setPopUp, popUp }) {
  const conditionDetails = useSelector(
    (state) => state.conditions.conditionDetails.conditionDetails
  );

  const practitionerName = useSelector(
    (state) => state.practitioner.practitionerDetails.name
  );

  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <table id="conditionDetails">
        <tbody>
          <tr>
            <td>{conditions.ConditionName}</td>
            <td>{conditionDetails.display}</td>
          </tr>
          <tr>
            <td>{conditions.ProblemCode}</td>
            <td>{conditionDetails.code}</td>
          </tr>
          <tr>
            <td>{conditions.Category}</td>
            <td>{conditionDetails.category}</td>
          </tr>
          <tr>
            <td>{conditions.CreatedAt}</td>
            <td>{conditionDetails.createdAt}</td>
          </tr>
          <tr>
            <td>{conditions.CreatedBy}</td>
            <td>{practitionerName}</td>
          </tr>
          <tr>
            <td>{conditions.ID}</td>
            <td>{conditionDetails.id}</td>
          </tr>
          <tr>
            <td>{conditions.Severity}</td>
            <td>{conditionDetails.severity}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
