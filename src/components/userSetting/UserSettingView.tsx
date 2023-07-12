import React from "react";
import Sidebar from "../common/sidebar/ Sidebar";
import * as S from "../../styles/UserInfoView.style";
import SideContentsBar from "../common/sideContentsBar/SideContentsBar";

const UserSettingView = () => {
  return (
    <S.MainContainer>
      <Sidebar />
      <SideContentsBar />
      <div>UserSettingView</div>
    </S.MainContainer>
  );
};

export default UserSettingView;
