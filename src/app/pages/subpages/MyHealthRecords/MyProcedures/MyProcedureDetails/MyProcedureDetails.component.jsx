// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Components
import { GenericPopUp } from "../../../../../components";

// Import: Constants
import { procedure } from "../../../../../../assets/constants/constants";

export default function MyProcedureDetails({ setPopUp, popUp }) {
  const procedureDetails = useSelector(
    (state) => state.procedures.procedureDetails.procedureDetails
  );

  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <table id="MyProcedureDetails">
        <tbody>
          <tr>
            <td>{procedure.ProcedureName}</td>
            <td>{procedureDetails.procedureName}</td>
          </tr>
          <tr>
            <td>{procedure.ProcedureCode}</td>
            <td>{procedureDetails.procedureCode}</td>
          </tr>
          <tr>
            <td>{procedure.Status}</td>
            <td>{procedureDetails.status}</td>
          </tr>
          <tr>
            <td>{procedure.PerformedDateTime}</td>
            <td>{procedureDetails.performedDateTime}</td>
          </tr>
          <tr>
            <td>{procedure.ID}</td>
            <td>{procedureDetails.id}</td>
          </tr>
          <tr>
            <td>{procedure.PerformedBy}</td>
            <td>{procedureDetails.performedBy}</td>
          </tr>
          <tr>
            <td>{procedure.BodySiteCode}</td>
            <td>{procedureDetails.bodySiteCode}</td>
          </tr>
          <tr>
            <td>{procedure.ProcedureMethod}</td>
            <td>{procedureDetails.procedureMethod}</td>
          </tr>
          <tr>
            <td>{procedure.ReasonConditions}</td>
            <td>{procedureDetails.reasonConditions}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
