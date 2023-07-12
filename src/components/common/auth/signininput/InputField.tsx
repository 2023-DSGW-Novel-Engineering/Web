import React, { Dispatch, SetStateAction } from "react";
import { IUserType } from "../../../auth/signIn/SignIn";
import * as S from "./InputField.style";

type IInputGeneric<T extends string> = {
  [t in T]: string;
} & {
  setState: Dispatch<SetStateAction<IUserType>>;
};
type IInputType = IInputGeneric<"title" | "type" | "placeholder" | "value">;

const InputField = (props: IInputType) => {
  return (
    <S.ContentsContainer>
      <S.Title>{props.title}</S.Title>
      <S.Input type={props.type} placeholder={props.placeholder} />
    </S.ContentsContainer>
  );
};

export default InputField;
