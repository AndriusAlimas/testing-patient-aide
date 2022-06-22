// Import: Packages
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Import: Components
import { GenericPopUp } from "../../../../../components";

import { getPractitionerDetails } from "../../../../../../redux/slices/PractitionerSlice";

// Import: Constants
import { allergies } from "../../../../../../assets/constants/constants";

export default function MyAllergyDetails({ setPopUp, popUp, allergyDetails }) {
  const dispatch = useDispatch();
  dispatch(getPractitionerDetails(allergyDetails.recordedByID));
  const PractitionerName = useSelector(
    (state) => state.practitioner.practitionerDetails.name
  );
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
            <td>{allergyDetails.reactionDisplay}</td>
          </tr>
          <tr>
            <td>{allergies.Reaction}</td>
            <td>{allergyDetails.manifestationDisplay}</td>
          </tr>
          <tr>
            <td>{allergies.Category}</td>
            <td>{allergyDetails.category}</td>
          </tr>
          <tr>
            <td>{allergies.OnsetDateTime}</td>
            <td>{allergyDetails.onSetDate}</td>
          </tr>
          <tr>
            <td>{allergies.RecordedDateTime}</td>
            <td>{allergyDetails.assertedDate}</td>
          </tr>
          <tr>
            <td>{allergies.RecordedBy}</td>
            <td>{PractitionerName && PractitionerName}</td>
          </tr>
          <tr>
            <td>{allergies.PractitionerID}</td>
            <td>{allergyDetails.recordedByID}</td>
          </tr>
          <tr>
            <td>{allergies.AllergyType}</td>
            <td>{allergyDetails.type}</td>
          </tr>
          <tr>
            <td>{allergies.IntoleranceType}</td>
            <td>{allergyDetails.manifestationDisplay}</td>
          </tr>
          {/* <tr>
            <td>{allergies.InformationSource}</td>
            <td>{allergyDetails.InformationSource}</td>
          </tr> */}
          <tr>
            <td>{allergies.VerificationStatus}</td>
            <td>{allergyDetails.verificationStatus}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
