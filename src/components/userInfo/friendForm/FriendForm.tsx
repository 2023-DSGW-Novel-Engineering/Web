import React from "react";
import * as S from "./FriendForm.style";
import { useParams } from "react-router-dom";

const FriendForm = () => {
  const { friendname } = useParams();
  return (
    <S.MainContainer>
      <S.SubContainer>
        <>
          <p>{friendname}</p>
        </>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default FriendForm;
