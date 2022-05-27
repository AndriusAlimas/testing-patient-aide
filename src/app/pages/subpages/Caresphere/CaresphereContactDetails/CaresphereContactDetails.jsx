// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp } from "../../../../components";

// Import: Constants
import { caresphereContactInfo } from "../../../../../assets/constants/constants";

export default function CaresphereContactDetails({
  setPopUp,
  popUp,
  caresphereContact,
}) {
  console.log(caresphereContact);
  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <table id="conditionDetails">
        <tbody>
          <tr>
            <td>{caresphereContactInfo.prefix}</td>
            <td>{caresphereContact.prefix}</td>
          </tr>
          <tr>
            <td>{caresphereContactInfo.firstName}</td>
            <td>{caresphereContact.firstname}</td>
          </tr>
          <tr>
            <td>{caresphereContactInfo.surname}</td>
            <td>{caresphereContact.surname}</td>
          </tr>
          <tr>
            <td>{caresphereContactInfo.telephone}</td>
            <td>{caresphereContact.telephone}</td>
          </tr>
          <tr>
            <td>{caresphereContactInfo.address}</td>
            <td>{caresphereContact.address}</td>
          </tr>
          <tr>
            <td>{caresphereContactInfo.postcode}</td>
            <td>{caresphereContact.postcode}</td>
          </tr>
          <tr>
            <td>{caresphereContactInfo.country}</td>
            <td>{caresphereContact.country}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
