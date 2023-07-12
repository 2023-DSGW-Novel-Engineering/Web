import React, { useState, Dispatch, SetStateAction } from "react";
import * as S from "../../../styles/auth/AuthInfo.style";
import InputField from "../../common/auth/signupinput/InputField";
import SubminBtn from "../../common/auth/button/SubminBtn";
import { useNavigate } from "react-router-dom";

type IUserInfoGeneric<T extends string> = {
  [t in T]: string;
};
export type IUserType = IUserInfoGeneric<
  "id" | "password" | "name" | "language"
>;

interface ISiginInProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

const SignIn = (props: ISiginInProps) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<IUserType>({
    id: "",
    password: "",
    name: "",
    language: "",
  });
  const ServerSignUp = () => {
    navigate("/");
  };
  return (
    <>
      <S.Title>회원가입{"(SignUp)"}</S.Title>
      <InputField
        title="이름(Name)"
        type="text"
        placeholder="이름을 입력해주세요."
        value={userInfo.id}
        setState={setUserInfo}
      />
      <InputField
        title="아이디(ID)"
        type="text"
        placeholder="아이디를 입력해주세요."
        value={userInfo.password}
        setState={setUserInfo}
      />
      <InputField
        title="비밀번호(Password)"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={userInfo.password}
        setState={setUserInfo}
      />
      <InputField
        title="언어(Language)"
        type="text"
        placeholder="자신이 사용하는 언어를 입력해주세요."
        value={userInfo.id}
        setState={setUserInfo}
      />
      <SubminBtn context="회원가입" onClcikFunc={ServerSignUp} />
      <S.AccountCheck onClick={() => props.setIsSignUp(false)}>
        계정이 있으신가요?
      </S.AccountCheck>
    </>
  );
};

export default SignIn;
