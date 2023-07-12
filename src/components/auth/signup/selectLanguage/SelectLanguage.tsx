import React from "react";
import * as S from "./SelectLanguage.style";

interface ISelectProps {
  setState: (newValue: string) => void;
}

const SelectLanguage = (props: ISelectProps) => {
  return (
    <S.ContentsContainer>
      <S.Title>모국어{"(Natvie language)"}</S.Title>
      <S.SelectWrap>
        <S.Select onChange={(e) => props.setState(e.target.value)}>
          <option value="korean">한국어</option>
          <option value="english">English</option>
          <option value="japanese">日本語</option>
          <option value="spanish">Espagnol</option>
          <option value="italian">Italia</option>
        </S.Select>
      </S.SelectWrap>
    </S.ContentsContainer>
  );
};

export default SelectLanguage;
