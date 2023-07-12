import React from "react";
import * as S from "./InputField.style";

type IInputGeneric<T extends string> = {
  [t in T]: string;
} & {
  setState: (newValue: string) => void;
};
type IInputType = IInputGeneric<"title" | "type" | "placeholder" | "value">;

const InputField = (props: IInputType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setState(event.target.value);
  };
  return (
    <S.ContentsContainer>
      <S.Title>{props.title}</S.Title>
      <S.Input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />
    </S.ContentsContainer>
  );
};

export default InputField;
