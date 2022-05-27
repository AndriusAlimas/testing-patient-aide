// Import: Packages
import React from "react";
import { useNavigate } from "react-router-dom";

// import { logoutUser } from "../../../../redux/userActions";

// Import: Components
import { GenericPopUp } from "../../..";

// Import: DummyData
import { patient } from "../../../../demo-data/dummyPatientData";

// Component: ProfilePopUp
export default function ProfilePopUp({ setPopUp, popUp, user }) {
  const navigate = useNavigate();
  console.log(user);
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
            <td>{user.firstname}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{user.surname}</td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td id="patientDOB">{user.dob}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>NHS Number</td>
            <td>{user.NHSNo}</td>
          </tr>
          <tr>
            <td>PAS ID</td>
            <td>{user.id}</td>
          </tr>
        </tbody>
      </table>

      <div id="changeLogin">
        <h3>Account Information</h3>
        <table>
          <tbody>
            <tr>
              <td className="changeLoginLink">Change Username</td>
              <td className="userLoginInfo">{user.firstname + user.surname}</td>
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
