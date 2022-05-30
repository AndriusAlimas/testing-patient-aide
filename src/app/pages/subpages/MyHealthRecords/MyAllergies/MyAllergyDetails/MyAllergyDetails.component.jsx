// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp } from "../../../../../components";

// Import: Constants
import { allergies } from "../../../../../../assets/constants/constants";

export default function MyAllergyDetails({ setPopUp, popUp, allergyDetails }) {
  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <table id="MyAllergyDetails">
        <tbody>
          <tr>
            <td>{allergies.Allergen}</td>
            <td>{allergyDetails.Allergen}</td>
          </tr>
          <tr>
            <td>{allergies.Severity}</td>
            <td>{allergyDetails.Severity}</td>
          </tr>
          <tr>
            <td>{allergies.Reaction}</td>
            <td>{allergyDetails.Reaction}</td>
          </tr>
          <tr>
            <td>{allergies.Category}</td>
            <td>{allergyDetails.Category}</td>
          </tr>
          <tr>
            <td>{allergies.OnsetDateTime}</td>
            <td>{allergyDetails.OnsetDateTime}</td>
          </tr>
          <tr>
            <td>{allergies.RecordedDateTime}</td>
            <td>{allergyDetails.RecordedDateTime}</td>
          </tr>
          <tr>
            <td>{allergies.RecordedBy}</td>
            <td>{allergyDetails.RecordedBy}</td>
          </tr>
          <tr>
            <td>{allergies.PractitionerID}</td>
            <td>{allergyDetails.PractitionerID}</td>
          </tr>
          <tr>
            <td>{allergies.AllergyType}</td>
            <td>{allergyDetails.AllergyType}</td>
          </tr>
          <tr>
            <td>{allergies.IntoleranceType}</td>
            <td>{allergyDetails.IntoleranceType}</td>
          </tr>
          <tr>
            <td>{allergies.InformationSource}</td>
            <td>{allergyDetails.InformationSource}</td>
          </tr>
          <tr>
            <td>{allergies.VerificationStatus}</td>
            <td>{allergyDetails.VerificationStatus}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
