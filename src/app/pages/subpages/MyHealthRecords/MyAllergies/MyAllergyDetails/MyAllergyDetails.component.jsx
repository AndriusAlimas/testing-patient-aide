// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp } from "../../../../../components";

// Import: Constants
import { allergies } from "../../../../../../assets/constants/constants";
import { useSelector } from "react-redux";

export default function MyAllergyDetails({ setPopUp, popUp }) {
  const allergyDetails = useSelector((state) => state.allergies.allergyDetails);
  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <table id="MyAllergyDetails">
        <tbody>
          <tr>
            <td>{allergies.Allergen}</td>
            <td>{allergyDetails.allergyName}</td>
          </tr>
          <tr>
            <td>{allergies.Severity}</td>
            <td>{allergyDetails.IntoleranceSeverity}</td>
          </tr>
          <tr>
            <td>{allergies.Reaction}</td>
            <td>{allergyDetails.manifestation}</td>
          </tr>
          <tr>
            <td>{allergies.Category}</td>
            <td>{allergyDetails.category}</td>
          </tr>
          <tr>
            <td>{allergies.OnsetDateTime}</td>
            <td>{allergyDetails.assertedDate}</td>
          </tr>
          <tr>
            <td>{allergies.RecordedDateTime}</td>
            <td>{allergyDetails.assertedDate}</td>
          </tr>
          <tr>
            <td>{allergies.RecordedBy}</td>
            <td>{allergyDetails.practitionerID}</td>
          </tr>
          <tr>
            <td>{allergies.PractitionerID}</td>
            <td>{allergyDetails.practitionerID}</td>
          </tr>
          <tr>
            <td>{allergies.AllergyType}</td>
            <td>{allergyDetails.IntoleranceCategory}</td>
          </tr>
          <tr>
            <td>{allergies.IntoleranceType}</td>
            <td>{allergyDetails.IntoleranceType}</td>
          </tr>
          <tr>
            <td>{allergies.InformationSource}</td>
            <td>{allergyDetails.informationSource}</td>
          </tr>
          <tr>
            <td>{allergies.VerificationStatus}</td>
            <td>{allergyDetails.verificationStatus}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
