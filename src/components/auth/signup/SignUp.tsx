import React, { useState, Dispatch, SetStateAction } from "react";
import * as S from "../../../styles/auth/AuthInfo.style";
import InputField from "../../common/auth/signupinput/InputField";
import SubminBtn from "../../common/auth/button/SubminBtn";
import SelectLanguage from "./selectLanguage/SelectLanguage";
import { Api } from "../../../util/Api";

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
  const [userInfo, setUserInfo] = useState<IUserType>({
    id: "",
    password: "",
    name: "",
    language: "korean",
  });

  const OnChangeName = (newValue: string) => {
    setUserInfo({ ...userInfo, name: newValue });
  };
  const OnChangeId = (newValue: string) => {
    setUserInfo({ ...userInfo, id: newValue });
  };
  const OnChangePassword = (newValue: string) => {
    setUserInfo({ ...userInfo, password: newValue });
  };
  const OnChangeLanguage = (newValue: string) => {
    setUserInfo({ ...userInfo, language: newValue });
  };
  const ServerSignUp = () => {
    console.log("ddd");
    Api.post("/auth/register", {
      name: userInfo.name,
      user_id: userInfo.id,
      password: userInfo.password,
      native_language: userInfo.language,
    })
      .then((e) => {
        console.log(e);
        props.setIsSignUp(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <S.Title>회원가입{"(SignUp)"}</S.Title>
      <InputField
        title="이름(Name)"
        type="text"
        placeholder="이름을 입력해주세요."
        value={userInfo.name}
        setState={OnChangeName}
      />
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
      <SelectLanguage setState={OnChangeLanguage} />
      <SubminBtn context="회원가입" onClcikFunc={ServerSignUp} />
      <div>
        <S.AccountCheck onClick={() => props.setIsSignUp(false)}>
          계정이 있으신가요?
        </S.AccountCheck>
      </div>
    </>
  );
};

export default SignIn;
