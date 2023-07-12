import React, { useState, Dispatch, SetStateAction } from "react";
import * as S from "../../../styles/auth/AuthInfo.style";
import InputField from "../../common/auth/InputField";
import SubminBtn from "../../common/auth/SubminBtn";

type IUserInfoGeneric<T extends string> = {
  [t in T]: string;
};
export type IUserType = IUserInfoGeneric<"id" | "password">;

interface ISiginInProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

const SignIn = (props: ISiginInProps) => {
  const [userInfo, setUserInfo] = useState<IUserType>({ id: "", password: "" });
  return (
    <>
      <S.Title>로그인{"(SignIn)"}</S.Title>
      <InputField
        title="아이디(ID)"
        type="text"
        placeholder="아이디를 입력해주세요."
        value={userInfo.id}
        setState={setUserInfo}
      />
      <InputField
        title="비밀번호(Password)"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={userInfo.password}
        setState={setUserInfo}
      />
      <SubminBtn context="로그인" />
      <p onClick={() => props.setIsSignUp(true)}>계정이 없으신가요?</p>
    </>
  );
};

export default SignIn;
