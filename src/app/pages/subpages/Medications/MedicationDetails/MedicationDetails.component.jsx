// Import: Packages
import React from "react";
import moment from "moment";

// Import: Components
import { GenericPopUp } from "../../../../components";

// Import: constants
import { medication } from "../../../../../assets/constants/constants";

// Component: MedicationDetails
export default function MedicationDetails({
  setPopUp,
  popUp,
  medicationDetails,
}) {
  return (
    <GenericPopUp
      popUp={popUp}
      setPopUp={setPopUp}
      data-testid={"medicationDetails"}
    >
      <table id="MedicationDetails">
        <tbody>
          <tr>
            <td>{medication.name}</td>
            <td>
              {medicationDetails.current.name
                ? medicationDetails.current.name
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>{medication.dosage}</td>
            <td>
              {medicationDetails.current.dosage
                ? medicationDetails.current.dosage
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>{medication.frequency}</td>
            <td>
              {medicationDetails.current.frequency
                ? medicationDetails.current.frequency
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>{medication.duration}</td>
            <td>{`${
              medicationDetails.current.durationValue
                ? medicationDetails.current.durationValue
                : "N/A"
            } ${
              medicationDetails.current.durationUnit
                ? medicationDetails.current.durationUnit
                : ""
            }`}</td>
          </tr>
          <tr>
            <td>{medication.startDate}</td>
            <td>
              {medicationDetails.current.startDate
                ? moment(medicationDetails.current.startDate).format(
                    "DD/MM/YYYY MM:HH"
                  )
                : "N/A"}
            </td>
          </tr>

          <tr>
            <td>{medication.reviewDate}</td>
            <td>
              {medicationDetails.current.reviewDate
                ? moment(medicationDetails.current.reviewDate).format(
                    "DD/MM/YYYY MM:HH"
                  )
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>{medication.reviewPeriod}</td>
            <td>{`${
              medicationDetails.current.reviewPeriod
                ? medicationDetails.current.reviewPeriod
                : "N/A"
            } ${
              medicationDetails.current.reviewAfterUOM &&
              medicationDetails.current.reviewAfterUOM
            }`}</td>
          </tr>

          <tr>
            <td>{medication.instructions}</td>
            <td>
              {medicationDetails.current.supplyInstruction
                ? medicationDetails.current.supplyInstruction
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>{medication.status}</td>
            <td>
              {medicationDetails.current.status
                ? medicationDetails.current.status
                : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
