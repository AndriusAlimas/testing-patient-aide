// Import: Packages
import React from "react";

// import { logoutUser } from "../../../../redux/userActions";

// Import: Components
import { GenericPopUp } from "../../..";

// Import: DummyData
import { patient } from "../../../../demo-data/dummyPatientData";

// Component: ProfilePopUp
export default function ProfilePopUp({ setPopUp, popUp }) {
  return (
    <GenericPopUp
      popUp={popUp}
      setPopUp={setPopUp}
      addProfileImg={true}
      title="Profile"
      data-testid={"profilePopUp"}
    >
      <table id="patientDetails">
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{patient.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{patient.surname}</td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td id="patientDOB">{patient.dob}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{patient.gender}</td>
          </tr>
          <tr>
            <td>NHS Number</td>
            <td>{patient.NHSNo}</td>
          </tr>
          <tr>
            <td>PAS ID</td>
            <td>{patient.id}</td>
          </tr>
        </tbody>
      </table>

      <div id="changeLogin">
        <h3>Account Information</h3>
        <table>
          <tbody>
            <tr>
              <td className="changeLoginLink">Change Username</td>
              <td className="userLoginInfo">
                {patient.firstName + patient.surname}
              </td>
            </tr>
            <tr>
              <td className="changeLoginLink">Change Password</td>
              <td className="userLoginInfo">*******</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="logout">
        <table>
          <tbody>
            <tr>
              <td className="logout">Logout</td>
            </tr>
          </tbody>
        </table>
      </div>
    </GenericPopUp>
  );
}
