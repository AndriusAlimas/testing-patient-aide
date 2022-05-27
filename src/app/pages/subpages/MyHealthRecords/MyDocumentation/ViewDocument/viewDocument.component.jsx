// Import: Packages
import React from "react";

// Import: Components
import { GenericPopUp } from "../../../../../components";

// Import: Assets
import pdfIcon from "../../../../../../assets/img/icons/pdf.svg";

export default function ViewDocument({ setPopUp, popUp, document }) {
  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <object
      width= "100%"
      height="100%"
        id="myPdf"
        data={`data:application/pdf;base64,${document}#view=Fit`}
        type="application/pdf"
      >
        <div id="documentDidNotLoad">
          <img id="pdfIcon" src={pdfIcon} alt="PDF Icon" />
          <p>
            Click <a href={`data:application/pdf;base64,${document}`} download>
               here
            </a> to download Document
          </p>
        </div>
      </object>
    </GenericPopUp>
  );
}
