// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp } from "../../../../components";

// Import: constants
import { medication } from "../../../../../assets/constants/constants";

// Component: MedicationDetails
export default function MedicationDetails({ setPopUp, popUp, medicationInfo }) {
  return (
    <GenericPopUp
      popUp={popUp}
      setPopUp={setPopUp}
      data-testid={"medicationDetails"}
    >
      <table id="MedicationDetails">
        <tbody>
          <tr>
            <td>{medication.Name}</td>
            <td>{medicationInfo.Name}</td>
          </tr>
          <tr>
            <td>{medication.Direction}</td>
            <td>{medicationInfo.Direction}</td>
          </tr>
          <tr>
            <td>{medication.StartDate}</td>
            <td>{medicationInfo.StartDate}</td>
          </tr>
          <tr>
            <td>{medication.Duration}</td>
            <td>{medicationInfo.Duration}</td>
          </tr>
          <tr>
            <td>{medication.AdminMethod}</td>
            <td>{medicationInfo.AdminMethod}</td>
          </tr>
          <tr>
            <td>{medication.Dose}</td>
            <td>{medicationInfo.Dose}</td>
          </tr>
          <tr>
            <td>{medication.Quantity}</td>
            <td>{medicationInfo.Quantity}</td>
          </tr>
          <tr>
            <td>{medication.Frequency}</td>
            <td>{medicationInfo.Frequency}</td>
          </tr>
          <tr>
            <td>{medication.AdditionalComments}</td>
            <td>{medicationInfo.AdditionalComments}</td>
          </tr>
          <tr>
            <td>{medication.id}</td>
            <td>{medicationInfo.id}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
