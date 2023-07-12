import axios from "axios";
import { Dispatch, SetStateAction } from "react";
const url = "http://localhost:8080/translate/ko";

interface IChatValue {
  chat: string;
  isMine: boolean;
}

const ConnectPapagoArray = async (
  context: IChatValue,
  beforeChat: string,
  state: IChatValue[],
  setState: Dispatch<SetStateAction<IChatValue[]>>
) => {
  await axios
    .post(url, {
      text: context.chat,
      language: localStorage.getItem("Native_language")?.substr(0, 2),
    })
    .then((e) => {
      let newMessage: string = e.data.translateLanguage;
      let a: IChatValue[] = [...state];
      console.log(e.data.translateLanguage);
      a.push({
        chat: newMessage,
        isMine: beforeChat === e.data.translateLanguage,
      });
      setState([...a]);
    })
    .catch((_) => {});
};

export default ConnectPapagoArray;
