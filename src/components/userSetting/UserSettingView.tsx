import React from "react";
import Sidebar from "../common/sidebar/ Sidebar";
import * as S from "../../styles/UserInfoView.style";
import SideContentsBar from "../common/sideContentsBar/SideContentsBar";
import Setting from "./userSetting/Setting";

const UserSettingView = () => {
  return (
    <S.MainContainer>
      <Sidebar />
      <SideContentsBar title="설정" url="usersetting" />
      <Setting />
    </S.MainContainer>
  );
};

export default UserSettingView;
