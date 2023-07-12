import React from "react";
import Sidebar from "../common/sidebar/ Sidebar";
import * as S from "../../styles/UserInfoView.style";
import SideContentsBar from "../common/sideContentsBar/SideContentsBar";

const UserRoomView = () => {
  return (
    <S.MainContainer>
      <Sidebar />
      <SideContentsBar />
      <div>UserRoomView</div>
    </S.MainContainer>
  );
};

export default UserRoomView;
