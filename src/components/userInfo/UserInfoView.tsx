import React from "react";
import Sidebar from "../common/sidebar/ Sidebar";
import * as S from "../../styles/UserInfoView.style";
import SideContentsBar from "../common/sideContentsBar/SideContentsBar";
import { useParams } from "react-router-dom";

const UserInfoView = () => {
  const { friendname } = useParams();
  return (
    <S.MainContainer>
      <Sidebar />
      <SideContentsBar
        title="친구"
        contents={["ddf", "fdfdf", "dddd", "fdfdf", "fdfd", "ddd"]}
        url="/userinfo"
      />
      <div>{friendname && <div>{friendname}</div>}</div>
    </S.MainContainer>
  );
};

export default UserInfoView;
