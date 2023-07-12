import React from "react";
import * as S from "./SubminButton.style";

const SubminBtn = ({
  context,
  onClcikFunc,
}: {
  context: string;
  onClcikFunc: () => void;
}) => {
  return <S.SubmitBtn onClick={onClcikFunc}>{context}</S.SubmitBtn>;
};

export default SubminBtn;
