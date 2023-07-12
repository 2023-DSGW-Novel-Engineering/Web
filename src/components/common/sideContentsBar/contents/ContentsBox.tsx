import React from "react";
import * as S from "./ContentsBox.style";
import { useNavigate, useParams } from "react-router-dom";

interface IContentsProps {
  context: string;
  url: string;
}

const ContentsBox = (props: IContentsProps) => {
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <S.MainContainer
      onClick={() => navigate(`${props.url}/${username}/${props.context}`)}
    >
      <div>{props.context}</div>
    </S.MainContainer>
  );
};

export default ContentsBox;
