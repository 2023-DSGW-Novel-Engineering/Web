import React from "react";
import Sidebar from "../common/sidebar/ Sidebar";
import * as S from "../../styles/UserInfoView.style";
import SideContentsBar from "../common/sideContentsBar/SideContentsBar";
import { useParams } from "react-router-dom";
import ChatRoom from "./chatRoom/ChatRoom";

const UserRoomView = () => {
  const { roomidx } = useParams();
  return (
    <S.MainContainer>
      <Sidebar />
      <SideContentsBar
        title="채팅"
        contents={["dfdddd", "ddd", "dff", "fff"]}
        url="/userroom"
      />
      <div>{roomidx && <ChatRoom />}</div>
    </S.MainContainer>
  );
};

export default UserRoomView;
