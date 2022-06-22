import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileStatus } from "../../../../../redux/slices/UITriggers";

import account from "./../../../../../assets/img/icons/account.svg";

import { ProfileIconContainer } from "./ProfileIcon.elements";

export default function ProfileIcon() {
  const dispatch = useDispatch();
  const { profileStatus } = useSelector((state) => state.uiTriggers);

  return (
    <ProfileIconContainer>
      <img
        id="accountIcon"
        alt="Account icon"
        src={account}
        onClick={() => dispatch(toggleProfileStatus(!profileStatus))}
      />
    </ProfileIconContainer>
  );
}
