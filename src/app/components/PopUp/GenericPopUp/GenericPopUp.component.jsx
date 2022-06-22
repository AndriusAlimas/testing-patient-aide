// Import: Packages
import React from "react";

// Import: Elements
import { GenericPopUpElement } from "./GenericPopUp.elements";

// Import: Assets
import profileImg from "../../../../assets/img/icons/ProfileImageModal.svg";
import allergyIcon from "../../../../assets/img/icons/sneeze.svg";
import { useDispatch, useSelector } from "react-redux";

// Import: redux
import {
  toggleNotificationsStatus,
  toggleProfileStatus,
} from "../../../../redux/slices/UITriggers";

export default function GenericPopUp({
  children,
  setPopUp,
  popUp,
  title,
  addProfileImg,
  AddQuestionnaireMenu,
}) {
  const dispatch = useDispatch();
  const { notificationsStatus } = useSelector((state) => state.uiTriggers);
  const { profileStatus } = useSelector((state) => state.uiTriggers);

  return (
    <GenericPopUpElement
      popUp={popUp}
      addProfileImg={addProfileImg}
      AddQuestionnaireMenu={AddQuestionnaireMenu}
      data-testid={"genericPopUp"}
    >
      <header>
        <h1>{title}</h1>
        <button
          onClick={() =>
            notificationsStatus
              ? dispatch(toggleNotificationsStatus(!notificationsStatus))
              : profileStatus
              ? dispatch(toggleProfileStatus(!profileStatus))
              : popUp
              ? setPopUp(!popUp)
              : null
          }
        >
          Done
        </button>
      </header>
      {addProfileImg && (
        <div id="profileImg">
          <div id="imgContainer">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      )}
      {<section id="container">{children}</section>}
    </GenericPopUpElement>
  );
}
