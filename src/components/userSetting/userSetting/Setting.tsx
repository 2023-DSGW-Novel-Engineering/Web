import React, { useEffect, useState } from "react";
import * as S from "./Setting.style";
import ConnectPapago from "../../../util/ConnectPapago";

const Setting = () => {
  const [basicId, setBasicId] = useState<string>("아이디");
  const [basicLanguage, setBasicLanguage] = useState<string>("모국어");

  useEffect(() => {
    ConnectPapago(setBasicId, basicId);
    ConnectPapago(setBasicLanguage, basicLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.UserContentsWrap>
          <S.UserInfoWrap>
            <S.UserProfile></S.UserProfile>
            <S.UserInfoName>{localStorage.getItem("Name")}</S.UserInfoName>
          </S.UserInfoWrap>
          <S.UserTextWrap>
            <S.UserInfoTitle>{basicId}</S.UserInfoTitle>
            <S.UserInfoContext>
              {localStorage.getItem("User_id")}
            </S.UserInfoContext>
          </S.UserTextWrap>
          <S.UserTextWrap>
            <S.UserInfoTitle>{basicLanguage}</S.UserInfoTitle>
            <S.UserInfoContext>
              {localStorage.getItem("Native_language")}
            </S.UserInfoContext>
          </S.UserTextWrap>
        </S.UserContentsWrap>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default Setting;
