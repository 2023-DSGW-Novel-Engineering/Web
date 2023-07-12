import React, { useState, Dispatch, SetStateAction } from "react";
import * as S from "../../../styles/auth/AuthInfo.style";
import InputField from "../../common/auth/signininput/InputField";
import SubminBtn from "../../common/auth/button/SubminBtn";
import { useNavigate } from "react-router-dom";

type IUserInfoGeneric<T extends string> = {
  [t in T]: string;
};
export type IUserType = IUserInfoGeneric<"id" | "password">;

interface ISiginInProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

const SignIn = (props: ISiginInProps) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<IUserType>({ id: "", password: "" });

  const OnChangeId = (newValue: string) => {
    setUserInfo({ ...userInfo, id: newValue });
  };
  const OnChangePassword = (newValue: string) => {
    setUserInfo({ ...userInfo, password: newValue });
  };

  const ServerSignIn = () => {
    navigate(`/userinfo/${userInfo.id}/`);
  };
  return (
    <>
      <S.Title>로그인{"(SignIn)"}</S.Title>
      <InputField
        title="아이디(ID)"
        type="text"
        placeholder="아이디를 입력해주세요."
        value={userInfo.id}
        setState={OnChangeId}
      />
      <InputField
        title="비밀번호(Password)"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={userInfo.password}
        setState={OnChangePassword}
      />
      <SubminBtn context="로그인" onClcikFunc={ServerSignIn} />
      <S.AccountCheck onClick={() => props.setIsSignUp(true)}>
        계정이 없으신가요?
      </S.AccountCheck>
    </>
  );
};

export default SignIn;
