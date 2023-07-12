import axios from "axios";
import { Dispatch, SetStateAction } from "react";
const url = "http://localhost:8080/translate";

const ConnectGoValue = async (
  context: string,
  setState: Dispatch<SetStateAction<string>>
) => {
  await axios
    .post(url, {
      text: context,
      language: localStorage.getItem("Native_language")?.substr(0, 2),
    })
    .then((e) => {
      setState(e.data.translateLanguage);
    })
    .catch((_) => {});
};

export default ConnectGoValue;
