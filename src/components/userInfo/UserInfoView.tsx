import React, { useEffect } from "react";
import Sidebar from "../common/sidebar/ Sidebar";
import * as S from "../../styles/UserInfoView.style";
import SideContentsBar from "../common/sideContentsBar/SideContentsBar";
import { useParams } from "react-router-dom";
import FriendForm from "./friendForm/FriendForm";
import { Api } from "../../util/Api";

const UserInfoView = () => {
  const { friendname } = useParams();
  useEffect(() => {
    const userToken: string | null = localStorage.getItem("Token");
    console.log("ee", userToken);

    Api.get("/api/users/info", {
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then((e) => {
        console.log("tt", e);
        localStorage.setItem("Name", e.data.name);
        localStorage.setItem("Native_language", e.data.native_language);
        localStorage.setItem("User_id", e.data.user_id);
      })
      .catch((e) => {
        return e;
      });
  }, []);
  return (
    <S.MainContainer>
      <Sidebar />
      <SideContentsBar
        title="친구"
        contents={["ddf", "fdfdf", "dddd", "fdfdf", "fdfd", "ddd"]}
        url="/userinfo"
      />
      <div>{friendname && <FriendForm />}</div>
    </S.MainContainer>
  );
};

export default UserInfoView;
