// Import: Packages
import React from "react";

// Import: Elements
import { GenericPopUpElement } from "./GenericPopUp.elements";

// Import: Assets
import profileImg from "../../../../assets/img/icons/ProfileImageModal.svg";
import allergyIcon from "../../../../assets/img/icons/sneeze.svg";
import { useDispatch, useSelector } from "react-redux";

// Import: redux
import { toggleNotificationsStatus } from "../../../../redux/slices/PopUpStatusSlice";
import { toggleProfileStatus } from "../../../../redux/slices/PopUpStatusSlice";

export default function GenericPopUp({
  bannerImgSrc,
  children,
  setPopUp,
  popUp,
  title,
  addBannerImg,
  addProfileImg,
  addAllergyIcon,
  toggleNotificationPage,
  setToggleNotificationPage,
  AddQuestionnaireMenu,
}) {
  const dispatch = useDispatch();
  const { notificationsStatus } = useSelector((state) => state.popUpStatus);
  const { profileStatus } = useSelector((state) => state.popUpStatus);

  return (
    <GenericPopUpElement
      popUp={popUp}
      addProfileImg={addProfileImg}
      addAllergyIcon={addAllergyIcon}
      NotificationPage={toggleNotificationPage}
      data-testid={"genericPopUp"}
      AddQuestionnaireMenu={AddQuestionnaireMenu}
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
          <img src={profileImg} alt="Profile" />
        </div>
      )}
      {addBannerImg && (
        <div id="bannerImg">
          <img src={bannerImgSrc} />
        </div>
      )}
      {addAllergyIcon && (
        <div id="profileImg">
          <img src={allergyIcon} />
        </div>
      )}

      {<section id="container">{children}</section>}
    </GenericPopUpElement>
  );
}
