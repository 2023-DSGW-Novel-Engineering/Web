import React from "react";
import * as S from "./Sidebar.style";
import Icon1 from "../../../asset/Icon1.svg";
import Icon2 from "../../../asset/Icon2.svg";
import Icon3 from "../../../asset/Icon3.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const userName = localStorage.getItem("userId");
  const navigate = useNavigate();
  return (
    <S.MainSidebarContainer>
      <S.Icon Img={Icon1} onClick={() => navigate(`/userinfo/${userName}`)} />
      <S.Icon Img={Icon2} onClick={() => navigate(`/userroom/${userName}`)} />
      <S.Icon
        Img={Icon3}
        onClick={() => navigate(`/usersetting/${userName}`)}
      />
    </S.MainSidebarContainer>
  );
};

export default Sidebar;
