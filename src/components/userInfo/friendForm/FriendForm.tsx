import React from "react";
import * as S from "./FriendForm.style";
import { useParams } from "react-router-dom";

const FriendForm = () => {
  const { friendname } = useParams();
  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.UserContentsWrap>
          <S.UserInfoWrap>
            <S.UserProfile></S.UserProfile>
            <S.UserInfoName>{friendname}</S.UserInfoName>
          </S.UserInfoWrap>
          <S.UserTextWrap>
            <S.UserInfoTitle>아이디</S.UserInfoTitle>
            <S.UserInfoContext>dfd</S.UserInfoContext>
          </S.UserTextWrap>
          <S.UserTextWrap>
            <S.UserInfoTitle>모국어</S.UserInfoTitle>
            <S.UserInfoContext>dfdf</S.UserInfoContext>
          </S.UserTextWrap>
        </S.UserContentsWrap>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default FriendForm;
