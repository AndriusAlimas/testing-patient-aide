// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Components
import { GenericPopUp } from "../../../../../components";

// Import: Assets
import pdfIcon from "../../../../../../assets/img/icons/pdf.svg";

export default function ViewDocument({ setPopUp, popUp, document }) {
  const documentDetails = useSelector(
    (state) => state.documents.document.documentDetails
  );

  return (
    <GenericPopUp popUp={popUp} setPopUp={setPopUp}>
      <object
        width="100%"
        height="100%"
        id="myPdf"
        data={`data:${documentDetails.contentType};base64,${documentDetails.content}#view=Fit`}
        type={documentDetails.contentType}
      >
        <div id="documentDidNotLoad">
          <img id="pdfIcon" src={pdfIcon} alt="PDF Icon" />
          <p>
            Click{" "}
            <a
              href={`data:${documentDetails.contentType};base64,${documentDetails.content}`}
              download
            >
              here
            </a>{" "}
            to download Document
          </p>
        </div>
      </object>
    </GenericPopUp>
  );
}
