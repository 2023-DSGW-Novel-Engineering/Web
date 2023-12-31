import axios from "axios";
import { Dispatch, SetStateAction } from "react";
const url = "http://localhost:8080/translate/ko";

const ConnectPapago = async (
  setState: Dispatch<SetStateAction<string>>,
  context: string
) => {
  console.log("dfdf", localStorage.getItem("Native_language"));

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

export default ConnectPapago;
