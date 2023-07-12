import React from "react";
import Sidebar from "../common/sidebar/ Sidebar";
import * as S from "../../styles/UserInfoView.style";
import SideContentsBar from "../common/sideContentsBar/SideContentsBar";

const UserInfoView = () => {
  return (
    <S.MainContainer>
      <Sidebar />
      <SideContentsBar />
      <div>UserInfoView</div>
    </S.MainContainer>
  );
};

export default UserInfoView;
