import React from "react";
import * as S from "./ContentsBox.style";
import { useNavigate } from "react-router-dom";

interface IContentsProps {
  context: string;
  url: string;
}

const ContentsBox = (props: IContentsProps) => {
  const navigate = useNavigate();
  return (
    <S.MainContainer
      onClick={() => navigate(`${props.url}/gg/${props.context}`)}
    >
      <div>{props.context}</div>
    </S.MainContainer>
  );
};

export default ContentsBox;
