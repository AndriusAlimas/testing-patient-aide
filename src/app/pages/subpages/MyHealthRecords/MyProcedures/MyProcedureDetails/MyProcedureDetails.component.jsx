// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp } from "../../../../../components";

// Import: Constants 
import { procedure } from "../../../../../../assets/constants/constants";

export default function MyProcedureDetails({
  setPopUp,
  popUp,
  procedureDetails,
}) {
  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
     
      <table id="MyProcedureDetails">
        <tbody>
          <tr>
            <td>{procedure.ProcedureName}</td>
            <td>{procedureDetails.ProcedureName}</td>
          </tr>
          <tr>
            <td>{procedure.ProcedureCode}</td>
            <td>{procedureDetails.ProcedureCode}</td>
          </tr>
          <tr>
            <td>{procedure.Status}</td>
            <td>{procedureDetails.Status}</td>
          </tr>
          <tr>
            <td>{procedure.PerformedDateTime}</td>
            <td>{procedureDetails.PerformedDateTime}</td>
          </tr>
          <tr>
            <td>{procedure.ID}</td>
            <td>{procedureDetails.ID}</td>
          </tr>
          <tr>
            <td>{procedure.PerformedBy}</td>
            <td>{procedureDetails.PerformedBy}</td>
          </tr>
          <tr>
            <td>{procedure.BodySiteCode}</td>
            <td>{procedureDetails.BodySiteCode}</td>
          </tr>
          <tr>
            <td>{procedure.ProcedureMethod}</td>
            <td>{procedureDetails.ProcedureMethod}</td>
          </tr>
          <tr>
            <td>{procedure.ReasonConditions}</td>
            <td>{procedureDetails.ReasonConditions}</td>
          </tr>
        </tbody>
      </table>
    </GenericPopUp>
  );
}
