import React from "react";
import * as S from "./SubminButton.style";

const SubminBtn = ({ context }: { context: string }) => {
  return <S.SubmitBtn>{context}</S.SubmitBtn>;
};

export default SubminBtn;
