import axios from "axios";
import { Dispatch, SetStateAction } from "react";
const url = "http://localhost:8080/translate";

const ConnectPapago = async (
  setState: Dispatch<SetStateAction<string>>,
  context: string
) => {
  await axios
    .post(url, {
      text: context,
    })
    .then((e) => {
      setState(e.data.translateLanguage);
    })
    .catch((_) => {});
};

export default ConnectPapago;
