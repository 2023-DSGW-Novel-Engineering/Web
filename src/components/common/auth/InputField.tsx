import React, { Dispatch, SetStateAction } from "react";
import { IUserType } from "../../auth/signIn/SignIn";

type IInputGeneric<T extends string> = {
  [t in T]: string;
} & {
  setState: Dispatch<SetStateAction<IUserType>>;
};
type IInputType = IInputGeneric<"title" | "type" | "placeholder" | "value">;

const InputField = (props: IInputType) => {
  return (
    <div>
      <p>{props.title}</p>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default InputField;
